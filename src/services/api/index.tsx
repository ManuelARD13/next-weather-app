const API: string | undefined = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
const BASEURL: string = "https://api.openweathermap.org"

const endPoints = {
  getLocation: (cityName: string): string => {
    return `${BASEURL}/geo/1.0/direct?q=${cityName}&limit=1&appid=${API}`
  },
  getCurrentWeather: (lat: number, lon: number): string => {
    return `${BASEURL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`
  },
  get3HourForecast: (lat: number, lon: number): string => {
    return `${BASEURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=metric`
  } ,
};

export default endPoints;
