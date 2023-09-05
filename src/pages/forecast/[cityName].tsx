import { WeatherCTX } from '@context/WeatherContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Image from 'next/image';

function daily(): JSX.Element {
  const router = useRouter();

  const { weatherHistory } = useContext(WeatherCTX);

  const weatherData = weatherHistory.find((weather) => weather.city.replaceAll(' ', '-') === router.query.cityName);

  return (
    <>
      <div>NavMenu</div>
      <div className="weather-card flex flex-col backdrop-blur-sm bg-black bg-opacity-30 rounded-md border-2 border-white border-opacity-20 shadow-2xl text-white p-4 w-4/12">
        <h5 className="text-xl">{weatherData.city}</h5>
        <p className="text-xs">{weatherData.country}</p>
        <div className="flex my-2.5">
          <Image src={'/soleado.png'} alt="" width={50} height={50} />
          <p className="text-2xl">{Math.round(weatherData.main.temp)}°C</p>
        </div>
        <p className="text-xs">Real Feel {Math.round(weatherData.main.feels_like)}°C</p>
      </div>
      <div>Miscelaneous Menu</div>
    </>
  );
}

export default daily;
