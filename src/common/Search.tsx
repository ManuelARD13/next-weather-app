import { WeatherCTX } from '@context/WeatherContext';
import { useContext, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Search() {
  const [searchedCity, setSearch] = useState('');

  const { location, useGetLocation, useGetWeather, useGetHourlyWeather } = useContext(WeatherCTX);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    useGetLocation(searchedCity);
    useGetWeather(location.lat, location.lon);
    useGetHourlyWeather(location.lat, location.lon);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row w-full">
      <input
        type="text"
        placeholder="Search By City"
        name="navSearch"
        id="navSearch"
        className="w-full h-10 border-1 border-gray-300 p-2 rounded-md text-gray-600"
        onChange={(e) => setSearch(e.target.value)}
        value={searchedCity}
      />
      <button type="submit" className="w-10 h-10 border-2 border-white rounded-md p-2 text-white cursor-pointer">
        Search
      </button>
    </form>
  );
}

export default Search;
