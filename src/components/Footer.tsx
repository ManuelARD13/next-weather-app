import NavPath from '@common/NavPath';
import Link from 'next/link';
import React from 'react';

function Footer(): JSX.Element {
  const footerPoliciesLinks = [
    {
      href: '/terms',
      text: 'Terminos de uso',
    },
    {
      href: '/terms',
      text: 'Politica de privacidad',
    },
    {
      href: '/terms',
      text: 'Politica de cookies',
    },
  ];

  return (
    <div className="w-full h-32 grid grid-template-rows-6 items-center justify-center bg-white text-gray-500 border-t-gray-100 border-2 p-2">
      <div className="row-start-1 row-span-2">
        <NavPath />
      </div>
      <div className="w-full h-full row-start-3 row-span-4 flex flex-col items-center justify-center">
        <p className="text-sm">© 2023 SwlWeather, Inc. "SwlWeather" y Owl Design son marcas registradas de SwlWeather, Inc. Todos los derechos reservados.</p>
        <ul className="flex items-center justify-center">
          {footerPoliciesLinks.map((link, index) => (
            <li key={link.text} className={`${index === 1 ? 'border-x-2 border-gray-600' : ''} px-3`}>
              <Link href={link.href} className="text-sm font-bold cursor-pointer">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
