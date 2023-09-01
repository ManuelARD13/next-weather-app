import endPoints from '@services/api';
import axios from 'axios';
import { useState, createContext, useEffect } from 'react';
const API: string | undefined = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

const WeatherCTX = createContext(
  {} as {
    location: any;
    weatherData: {
      main: {};
      weather: any;
      wind: {};
    };
    useGetLocation: (cityName: string) => void;
    useGetWeather: (lat: number, lon: number) => void;
    useGetHourlyWeather: (lat: number, lon: number) => void;
  }
);

function WeatherProvider({ children }: { children: JSX.Element | null }) {
  const [location, setLocation] = useState({
    country: '',
    city: '',
    lat: 0,
    lon: 0,
  });

  const [weatherData, setWeatherData] = useState({
    main: {},
    weather: [],
    wind: {},
  });

  const [HourlyData, setHourlyData] = useState({});
  const [testData, setTestData] = useState();

  const useGetLocation = async (cityName: string) => {
    const { data } = await axios.get(endPoints.getLocation(cityName));
    console.log(data);
    setLocation(
      {
        ...location, 
        country: data[0].country, 
        city: data[0].name, 
        lat: data[0].lat, 
        lon: data[0].lon
      });
  }
  const useGetWeather = async (lat: number, lon: number) => {
    const { data } = await axios.get(endPoints.getCurrentWeather(lat, lon));
    console.log(data);
    setWeatherData({ ...weatherData, main: data.main, weather: data.weather, wind: data.wind });
  };

  const useGetHourlyWeather = async (lat: number, lon: number) => {
    const { data } = await axios.get(endPoints.get3HourForecast(lat, lon));
    console.log(data);
    setHourlyData(data);
  };

  return (
    <WeatherCTX.Provider
      value={{
        location,
        weatherData,
        useGetLocation,
        useGetWeather,
        useGetHourlyWeather,
      }}
    >
      {children}
    </WeatherCTX.Provider>
  );
}

export { WeatherCTX, WeatherProvider };
