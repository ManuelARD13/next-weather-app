import endPoints from '@services/api';
import axios from 'axios';
import { useState, createContext, useReducer } from 'react';
const API: string | undefined = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

const WeatherCTX = createContext({} as {
  getWeather: (cityName: string) => void;
  weatherHistory: any[];
});

function WeatherProvider({ children }: { children: JSX.Element | null }) {

  const [ weatherHistory, setWeatherHistory ] = useState([] as any[]);
  const getWeather = async (cityName: string) => {
    const response = await axios.get(endPoints.getLocation(cityName));
    const location = {
      lat: response.data[0].lat,
      lon: response.data[0].lon,
    };

    const { data } = await axios.get(endPoints.getCurrentWeather(location.lat, location.lon));
  
 

    const weather = {
      main: data.main,
      weather: data.weather,
      wind: data.wind,
      city: response.data[0].name,
      country: response.data[0].country,
      lat: response.data[0].lat,
      lon: response.data[0].lon,
    }

    setWeatherHistory((weatherHistory) => [...weatherHistory, weather]);

  };

  const saveWeatherHistory = () => {
    
  }

  return (
    <WeatherCTX.Provider
      value={{
        getWeather,
        weatherHistory,
      }}
    >
      {children}
    </WeatherCTX.Provider>
  );
}

export { WeatherCTX, WeatherProvider };
