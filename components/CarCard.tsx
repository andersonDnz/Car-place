import React from 'react'


import { calculateCarRent } from '@/utils';

import Image from 'next/image';
import { CarProps } from '@/types';
import { CustomButton } from '.';

interface CarCardProps {
  car: CarProps;
}


const CarCard = ({ car }: CarCardProps) => {

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
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image
          src="/hero.png"
          alt="modelo de carro" fill priority
          className='object-contain' />
      </div>
    </div>
  )
}

export default CarCard