import Link from 'next/link';
import Image from 'next/image';

function Navbar(): JSX.Element {
  return (
    <div className="grid grid-cols-12 items-center place-items-center w-full h-16 px-40 shadow-lg text-white bg-gray-800">
      <div className="col-start-1 col-span-3">
        <Link href={'/'}>
          <div className="flex items-center">
            <Image src="/soleado.png" width={42} height={42} alt="logo" />
            <p className='text-xl'>Next Weather App</p>
          </div>
        </Link>
      </div>
      <div className="col-start-4 col-span-3 w-full flex items-center justify-evenly">
        <Link href="/">Home</Link>
        <Link href="/forecast">Forecast</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="col-start-7 col-span-1">15 °C</div>
      <div className="w-full col-start-8 col-span-4">
        <input 
          type="search" 
          placeholder="Search By City" 
          name="navSearch" 
          id="navSearch" 
          className="w-full h-10 border-1 border-gray-300 p-2 rounded-md focus:outline-yellow-400 text-black text-sm" 
        />
      </div>
      <div className="col-start-12 col-span-1">BMenu</div>
    </div>
  );
}

export default Navbar;
