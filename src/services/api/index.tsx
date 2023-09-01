const API: string | undefined = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

const endPoints = {
  getLocation: (cityName: string): string => `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API}`,
  getCurrentWeather: (lat: number, lon: number): string => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`,
  get3HourForecast: (lat: number, lon: number): string => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=metric`,
};

export default endPoints;
