"use client"
import React from 'react';
import Background from '@/public/assets/images/half-4.webp'; // Adjust the path to your image file
import { Title } from '@/components/commons/Title';
import Icon1 from '@/public/assets/images/icon-1.png';
import Icon2 from '@/public/assets/images/icon-2.png';
import Icon3 from '@/public/assets/images/icon-3.png';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export const WhyInvestmentLearning = () => {
  const { t } = useTranslation();
  return (
    <section className='my-12'>
      <div className='container bg-white p-20 max-sm:p-8 mx-auto'>
        <div className='flex flex-col w-full items-center '>
          <Title barPosition='center'>{t('TitAtWhyInves')}</Title>
          <div >
            <p className='my-4  text-lg'>{t('TextAtWhyInves')}</p>
          </div>
          <div className='my-8 w-full  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-8'>
            <div
              className='rounded-lg p-8 shadow-md'
            >
              <div className=' flex justify-center  py-4'>
                <Image alt='' src={Icon1}></Image>
              </div>
              <div className='flex justify-center m-4'>
                <p className='font-bold text-xl uppercase'>{t('TitBor1AtWhyInves')}</p>
              </div>
              <div className='flex justify-center m-4'>
                <p className='text-lg'>{t('TextBor1AtWhyInves')}</p>
              </div>
            </div>
            <div
              className='rounded-lg p-8 shadow-md'
            >
              <div className=' flex justify-center  py-4'>
                <Image alt='' src={Icon2}></Image>
              </div>
              <div className='flex justify-center m-4'>
                <p className='font-bold text-xl uppercase'>{t('TitBor2AtWhyInves')}</p>
              </div>
              <div className='flex justify-center m-4'>
                <p className='text-lg'>{t('TextBor2AtWhyInves')}</p>
              </div>
            </div>
            <div

              className='rounded-lg  p-8 shadow-md'
            >
              <div className=' flex justify-center  py-4'>
                <Image alt='' src={Icon3}></Image>
              </div>
              <div className='flex justify-center m-4'>
                <p className='font-bold text-xl uppercase'>{t('TitBor3AtWhyInves')}</p>
              </div>
              <div className='flex justify-center m-4'>
                <p className='text-lg'>{t('TextBor3AtWhyInves')} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
