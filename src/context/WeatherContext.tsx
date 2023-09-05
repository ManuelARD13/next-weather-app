import endPoints from '@services/api';
import axios from 'axios';
import { useState, createContext, useReducer } from 'react';
const API: string | undefined = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

const WeatherCTX = createContext({} as {
  weather: any;
  getWeather: (cityName: string) => void;
});

function WeatherProvider({ children }: { children: JSX.Element | null }) {
  const weatherReducer = (weather: any, action: any): any => {
    switch (action.type) {
      case 'SET_WEATHER': {
        return {
          ...weather,
          main: action.payload.main,
          weather: action.payload.weather,
          wind: action.payload.wind,
        };
      }

      case 'SET_CITY': {
        return {
          ...weather,
          city: action.payload.city,
          country: action.payload.country,
          lat: action.payload.lat,
          lon: action.payload.lon,
        };
      }
    }
    throw Error('Unknown action: ' + action.type);
  };

  const initialState = {
    country: '',
    city: '',
    lat: 0,
    lon: 0,
    main: {},
    weather: {},
    wind: {},
  };

  const [weather, dispatch] = useReducer(weatherReducer, initialState);
  const getWeather = async (cityName: string) => {
    const response = await axios.get(endPoints.getLocation(cityName));
    const location = {
      lat: response.data[0].lat,
      lon: response.data[0].lon,
    };
    dispatch({
      type: 'SET_CITY',
      payload: {
        city: response.data[0].name,
        country: response.data[0].country,
        lat: response.data[0].lat,
        lon: response.data[0].lon,
      },
    });
    const { data } = await axios.get(endPoints.getCurrentWeather(location.lat, location.lon));
  
    dispatch({
      type: 'SET_WEATHER',
      payload: {
        main: data.main,
        weather: data.weather,
        wind: data.wind,
      },
    })
  };

  return (
    <WeatherCTX.Provider
      value={{
        weather,
        getWeather,
      }}
    >
      {children}
    </WeatherCTX.Provider>
  );
}

export { WeatherCTX, WeatherProvider };
