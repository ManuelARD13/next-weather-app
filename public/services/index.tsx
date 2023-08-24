const API: string | undefined = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

const endPoints = {
  getLocation: (cityName: any): any => {
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API}`;
  },
  getCurrentWeather: (lat: number, lon: number): any => {
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
  },
  get3HourForecast: (lat: number, lon: number): any => {
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
  },
  getWeatherMap: (zoomLevel: number, coordX: number, coordY: number): any => {
    `http://maps.openweathermap.org/maps/2.0/weather/PAR0/${zoomLevel}/${coordX}/${coordY}?opacity=0.9&fill_bound=true&appid=${API}`;
  },
};

export default endPoints;
