import React from 'react'


import { calculateCarRent } from '@/utils';
import Image from 'next/image';


const CarCard = ({ car }: carCardPorps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        $
        <span className='self-start text-[14px] font-semibold'>
          {carRent}
        </span>
        <span className='self-end text-[14px] font-medium'>
          /dia
        </span>
        <div className='relative w-full h-40 my-3 object-contain'>
          <Image
            src="/hero.png"
            alt="modelo de carro"
            width={50}
            height={50}
            className='object-contain' />

        </div>
      </p>
    </div>
  )
}

export default CarCard