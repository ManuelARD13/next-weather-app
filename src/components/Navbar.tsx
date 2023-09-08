import Link from 'next/link';
import Image from 'next/image';
import Search from '@common/Search';
import { WeatherCTX } from '@context/WeatherContext';
import { useContext } from 'react';

function Navbar(): JSX.Element {
  const { weatherHistory } = useContext(WeatherCTX);

  let currentWeather = weatherHistory[0];

  let cityData = `${currentWeather?.city}, ${currentWeather?.state ? currentWeather?.state : currentWeather?.city}, ${currentWeather?.country}`;

  return (
    <div className="grid grid-cols-12 items-center place-items-center w-full h-16 px-40 shadow-lg text-white bg-gray-800">
      <div className="col-start-1 col-span-3">
        <Link href={'/'}>
          <div className="flex items-center">
            <Image src="/soleado.png" width={42} height={42} alt="logo" />
            <p className="text-xl">Next Weather App</p>
          </div>
        </Link>
      </div>
      <div className="col-start-4 col-span-3 w-full flex items-center justify-evenly">
        {currentWeather 
          ? (
            <Link href={`/forecast/${currentWeather.city.replaceAll(' ', '-')}`}>
              {
                weatherHistory.length > 0 
                  ?  <p className="text-lg p-0 text-center">
                      {
                        cityData.length > 30 ? `${cityData.slice(0, 28)}...` : cityData
                      }
                    </p>
                  : null
              }
            </Link>
          ) 
          : null
        }
      </div>
      <div className="flex justify-center items-center w-full col-start-7 col-span-1 text-lg">
        {
          currentWeather 
            ? <Image src={`/icons/${currentWeather.weather[0].icon}.png`} width={32} height={32} alt="logo" /> : null
        }
        <p>{currentWeather ? `${Math.round(currentWeather.main.temp)}°C` : ''}</p>
      </div>
      <div className="w-full col-start-8 col-span-4 rounded-md text-black">
        <Search />
      </div>
      <div className="col-start-12 col-span-1">BMenu</div>
    </div>
  );
}

export default Navbar;
