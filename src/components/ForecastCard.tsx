import Image from 'next/image';

function ForecastCard(weatherData: any) {
  return (
    <div className="flex flex-col backdrop-blur-sm bg-black bg-opacity-30 rounded-md border-2 border-white border-opacity-20 shadow-2xl text-white p-4 w-8/12">
      <h5 className="text-xl">{
        weatherData.weatherData?.dt_txt.substring(10, 16)
      }</h5>
      <p className="text-xs">{weatherData.weatherData?.weather?.[0]?.description}</p>
      <div className="flex my-2.5">
        <Image src={'/soleado.png'} alt="" width={50} height={50} />
        <p className="text-2xl">{Math.round(weatherData.weatherData?.main?.temp)}°C</p>
      </div>
      <p className="text-xs">Real Feel {Math.round(weatherData.weatherData?.main?.feels_like)}°C</p>
    </div>
  );
}

export default ForecastCard;
