import endPoints from '@services/api';
import axios from 'axios';
import { useState, createContext, useReducer } from 'react';
const API: string | undefined = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

const WeatherCTX = createContext({} as {
  getWeather: (cityName: string) => void;
  get3HourWeather: (weatherData: any) => void;
  weatherHistory: any[];
  forecast: any[];
});

function WeatherProvider({ children }: { children: JSX.Element | null }) {

  const [ weatherHistory, setWeatherHistory ] = useState([] as any[]);
  const [ forecast, setForecast ] = useState([]);
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

  const get3HourWeather = async (weatherData: any) => {
    const response = await axios.get(endPoints.get3HourForecast(weatherData.lat, weatherData.lon));
    setForecast(response.data.list);
    console.log(response.data.list);
  }

  return (
    <WeatherCTX.Provider
      value={{
        getWeather,
        get3HourWeather,
        weatherHistory,
        forecast
      }}
    >
      {children}
    </WeatherCTX.Provider>
  );
}

export { WeatherCTX, WeatherProvider };
