import Link from 'next/link';
import Image from 'next/image';
import Search from '@common/Search';
import { WeatherCTX } from '@context/WeatherContext';
import { useContext, useEffect, useState } from 'react';

function Navbar(): JSX.Element {
  const { weatherHistory } = useContext(WeatherCTX);
  const [navCityData, setNavCityData] = useState('');

  const currentWeather = weatherHistory?.reverse()[0];

  let cityData = `${currentWeather?.city}, ${currentWeather?.state ? currentWeather?.state : currentWeather?.city}, ${currentWeather?.country}`;

  useEffect(() => {
    if (cityData?.length > 30) {
      setNavCityData(`${cityData.slice(0, 30)}...`);
    } else {
      setNavCityData(cityData);
    }
  }, [cityData.length]);

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
        {currentWeather ? (
          <Link href={`/forecast/${currentWeather.city.replaceAll(' ', '-')}`}>
            <p className="text-lg p-0 text-center">{navCityData !== '' ? navCityData : null}</p>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="col-start-7 col-span-1 text-lg">{currentWeather ? Math.round(currentWeather.main.temp) : '- '}°C</div>
      <div className="w-full col-start-8 col-span-4 rounded-md text-black">
        <Search />
      </div>
      <div className="col-start-12 col-span-1">BMenu</div>
    </div>
  );
}

export default Navbar;
