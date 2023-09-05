import { WeatherCTX } from '@context/WeatherContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function daily(): JSX.Element {
  const router = useRouter();

  const { weatherHistory, get3HourWeather } = useContext(WeatherCTX);

  const weatherData = weatherHistory.find((weather) => weather.city.replaceAll(' ', '-') === router.query.cityName);

  return (
    <>
      <div>NavMenu</div>

      <div className='w-full flex flex-col items-center'>
      <Link href={`/forecast/3-hour/${weatherData.city.replaceAll(' ', '-')}`} className='flex justify-center w-full'>
      <div
        onClick={() => get3HourWeather(weatherData)} 
        className="weather-card flex flex-col backdrop-blur-sm bg-black bg-opacity-30 rounded-md border-2 border-white border-opacity-20 shadow-2xl text-white p-4 w-4/12"
      >
        <h5 className="text-xl">{weatherData.city}</h5>
        <p className="text-xs">{weatherData.country}</p>
        <div className="flex my-2.5">
          <Image src={'/soleado.png'} alt="" width={50} height={50} />
          <p className="text-2xl">{Math.round(weatherData.main.temp)}°C</p>
        </div>
        <p className="text-xs">Real Feel {Math.round(weatherData.main.feels_like)}°C</p>
      </div>
      </Link>
      </div>
      <div>Miscelaneous Menu</div>
    </>
  );
}

export default daily;
