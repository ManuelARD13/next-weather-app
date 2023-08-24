import endPoints from '../../public/services';
import axios from 'axios';
import { useState, createContext } from 'react';

const WeatherCTX = createContext({} as {
  location: {
    lat: number;
    lon: number;
    city: string;
  };
  weatherData: {
    main: {};
    weather: any;
    wind: {};
  };
  useGetLocation: (cityName: string) => void;
  useGetWeather: (lat: number, lon: number) => void;
  useGetHourlyWeather: (lat: number, lon: number) => void;
  useGetWeatherMap: (zoomLevel: number, coordX: number, coordY: number) => void;
});

function WeatherProvider({ children }: { children: JSX.Element | null }) {
  const [location, setLocation] = useState({
    lat: 0,
    lon: 0,
    city: "",
  });

  const [weatherData, setWeatherData] = useState({
    main: {},
    weather: [],
    wind: {},
  });

  const [ HourlyData, setHourlyData ] = useState({})

  const useGetLocation = async (cityName: string) => {
    const { data } = await axios.get(endPoints.getLocation(cityName));
    console.log(data)
    setLocation({...location, city: data[0].name, lat: data[0].lat, lon: data[0].lon});
  };

  const useGetWeather = async (lat: number, lon: number) => {
    const { data } = await axios.get(endPoints.getCurrentWeather(lat, lon));
    console.log(data)
    setWeatherData({...weatherData, main: data.main, weather: data.weather, wind: data.wind});
  };

  const useGetHourlyWeather = async (lat: number, lon: number) => {
    const { data } = await axios.get(endPoints.get3HourForecast(lat, lon));
    console.log(data)
    setHourlyData(data)
  }

  // const useGetWeatherMap = async (zoomLevel: number, coordX: number, coordY: number) => {
  //   const { data } = await axios.get(endPoints.getWeatherMap(zoomLevel, coordX, coordY));
  //   console.log(data)
  // }
  


  return (
    <WeatherCTX.Provider
      value={{
        location,
        weatherData,
        useGetLocation,
        useGetWeather,
        useGetHourlyWeather,
        // useGetWeatherMap
      }}
    >
      {children}
    </WeatherCTX.Provider>
  );
}

export { WeatherCTX, WeatherProvider };
