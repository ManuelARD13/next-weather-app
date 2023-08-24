import { WeatherCTX } from "@context/WeatherContext";
import { useContext } from "react";

export default function Home() {

  const { location, weatherData } = useContext(WeatherCTX);
  return(

    <>
    <div>HOME</div>
    <div>
      <h1>{location?.city}</h1>
      <p>{Math.round(weatherData?.main?.temp)}°C</p>
    </div>
    </>
  ) ;
}
