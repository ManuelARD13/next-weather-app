import ForecastCard from '@/components/ForecastCard';
import { WeatherCTX } from '@context/WeatherContext';
import endPoints from '@services/api';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

function daily(): JSX.Element {
  const router = useRouter();

  const { weatherHistory } = useContext(WeatherCTX);

  const weatherData = weatherHistory.find((weather) => weather.city.replaceAll(' ', '-') === router.query.cityName);

  return (
    <div className="flex flex-col items-center w-screen">
      <div>NavMenu</div>
      <div className="w-full flex flex-col items-center">
        <div>Current Weather</div>
        <ul className="flex flex-col items-center gap-5 w-full">
          {weatherData?.forecast?.slice(0, 8).map((weatherData: any) => (
            <li key={weatherData.dt_txt} className="w-full flex justify-center">
              <ForecastCard weatherData={weatherData} />
            </li>
          ))}
        </ul>
      </div>
      <div>Miscelaneous Menu</div>
    </div>
  );
}

export default daily;
