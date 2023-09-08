import Search from '@common/Search';
import { WeatherCTX } from '@context/WeatherContext';
import { useContext } from 'react';
import WeatherCard from '@/components/WeatherCard';

export default function Home() {
  const { weatherHistory } = useContext(WeatherCTX);

  return (
    <main className="w-full">
      <div className="home-screen h-screen bg-violet-300 flex flex-col items-center justify-center">
        <div className="w-6/12 flex items-center justify-center">
          <Search />
        </div>
        <p className="text-lg text-white my-5">LAST SEARCHS</p>
        <div className="w-6/12 h-44 flex flex-row gap-2">
          {weatherHistory.map((weather, index) => {
            return <WeatherCard key={index} weatherData={weather} />;
          })}
        </div>
      </div>
      <div>
        <h2></h2>
      </div>
    </main>
  );
}
