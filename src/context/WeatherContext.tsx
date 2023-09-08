import endPoints from '@services/api';
import axios from 'axios';
import { useState, createContext } from 'react';

const WeatherCTX = createContext(
  {} as {
    getWeather: (cityName: string) => void;
    weatherHistory: any[];
  }
);

function WeatherProvider({ children }: { children: JSX.Element | null }) {
  const [weatherHistory, setWeatherHistory] = useState([] as any[]);

  const getWeather = async (cityName: string) => {

    const { data: location } = await axios.get(endPoints.getLocation(cityName));

    const { data: weatherData } = await axios.get(endPoints.getCurrentWeather(location[0].lat, location[0].lon));

    const { data: forecast } = await axios.get(endPoints.get3HourForecast(location[0].lat, location[0].lon));

    const weather = {
      main: weatherData.main,
      weather: weatherData.weather,
      wind: weatherData.wind,
      forecast: forecast.list,
      city: location[0].local_names?.es || location[0].name,
      country: location[0].country,
      state: location[0].state,
      lat: location[0].lat,
      lon: location[0].lon,
    };

    const newWeatherHistory = [...weatherHistory, weather];

    if (newWeatherHistory.length > 3) {
      const filteredWeatherHistory = newWeatherHistory.slice(newWeatherHistory.length - 3, newWeatherHistory.length);
      setWeatherHistory(filteredWeatherHistory.reverse());
    } else {
      setWeatherHistory((weatherHistory) => [...weatherHistory, weather].reverse());
    }
  };

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
