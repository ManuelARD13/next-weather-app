import Search from "@common/Search";
import { WeatherCTX } from "@context/WeatherContext";
import { useContext, useEffect, useMemo, useState } from "react";
import WeatherCard from "@/components/WeatherCard";

export default function Home() {

  const { weatherHistory } = useContext(WeatherCTX);
  const [weatherCards, setWeatherCards] = useState([] as any[]);

  useEffect(() => {
    if(weatherHistory.length >= 3){
      setWeatherCards(weatherHistory.slice( weatherHistory.length - 3, weatherHistory.length).reverse());
    } else {
      setWeatherCards(weatherHistory.reverse());
    }
  }, [weatherHistory.length]);

  return(
<main className="w-full">
    <div className="home-screen h-96 bg-violet-300 flex flex-col items-center justify-center">
      <div className="w-6/12 flex items-center justify-center">
        <Search />
      </div>
      <p className="text-lg text-white my-5">LAST SEARCHS</p>
      <div className="w-6/12 h-44 flex flex-row gap-2">
        {
          weatherCards.map((weather, index) => {
            return <WeatherCard key={index} weatherData={weather} />
          })
        }
      </div>
    </div>
    </main>
  ) ;
}