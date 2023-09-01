import React from 'react';
import Image from 'next/image';

function WeatherCard({ weatherData }: { weatherData: any }) {
  return (
    <div className=' flex flex-col backdrop-blur-sm bg-white bg-opacity-30 rounded-md border-2 border-white border-opacity-20 shadow-2xl text-white p-4 w-4/12'>
      <h5 className='text-xl'>Buenos Aires</h5>
      <p className='text-xs'>Argentina</p>
      <div className='flex my-2.5'>
        <Image src={"/soleado.png"} alt=''width={50} height={50} />
        <p className='text-2xl'>{18}°C</p>
      </div>
      <p className='text-xs'>
        Real Feel {18}°C
      </p>
    </div>
  );
}

export default WeatherCard;