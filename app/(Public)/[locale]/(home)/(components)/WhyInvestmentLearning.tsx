"use client"
import React from 'react';
import Background from '@/public/assets/images/half-4.webp'; // Adjust the path to your image file
import { Title } from '@/components/commons/Title';
import Icon1 from '@/public/assets/images/icon-1.png';
import Icon2 from '@/public/assets/images/icon-2.png';
import Icon3 from '@/public/assets/images/icon-3.png';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import { BookOutlined } from '@ant-design/icons';
import { ReadOutlined } from '@ant-design/icons'; 
import { PieChartOutlined } from '@ant-design/icons';

export const WhyInvestmentLearning = () => {
  const { t } = useTranslation();
  return (
    <section className='my-12 relative'>
      <div className='container bg-transparent p-8 mx-auto'>
        <div className='flex flex-col w-full items-center z-10 relative '>
          <Title barPosition='center' className='tracking-wider'>{t('TitAtWhyInves')}</Title>
          <div className='px-20'>

            <p className='my-4  text-lg'>{t('TextAtWhyInves')}</p>
          </div>
          <div className='my-8 w-full  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12'>
            <div className='rounded-lg p-8 shadow-md bg-gray-50'>
              <div className='flex justify-center py-4'>
                <div style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '100px', 
                  height: '100px', 
                  backgroundColor: '#ebc012',
                  borderRadius: '50%', 
                  padding: '10px'
                }}>
                  <BookOutlined style={{ color: 'white', fontSize: '50px' }} />
                </div>
              </div>
              <div className='flex justify-center m-4'>
                <p className='font-bold text-xl uppercase'>{t('TitBor1AtWhyInves')}</p>
              </div>
              <div className='flex justify-center m-4'>
                <p className='text-lg text-black'>{t('TextBor1AtWhyInves')}</p>
              </div>
            </div>
            <div className='rounded-lg p-8 shadow-md bg-gray-50'>
              <div className=' flex justify-center py-4'>
                <div style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: '100px', 
                    height: '100px', 
                    backgroundColor: '#ebc012',
                    borderRadius: '50%', 
                    padding: '10px'
                  }}>
                    <ReadOutlined style={{ color: 'white', fontSize: '50px' }} />
                  </div>
              </div>
              <div className='flex justify-center m-4'>
                <p className='font-bold text-xl uppercase'>{t('TitBor2AtWhyInves')}</p>
              </div>
              <div className='flex justify-center m-4'>
                <p className='text-lg text-black'>{t('TextBor2AtWhyInves')}</p>
              </div>
            </div>
            <div className='rounded-lg  p-8 shadow-md bg-gray-50'>
              <div className=' flex justify-center  py-4'>
                  <div style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: '100px', 
                    height: '100px', 
                    backgroundColor: '#ebc012', 
                    borderRadius: '50%', 
                    padding: '10px'
                  }}>
                    <PieChartOutlined style={{ color: 'white', fontSize: '50px' }} />
                  </div>
              </div>
              <div className='flex justify-center m-4'>
                <p className='font-bold text-xl uppercase'>{t('TitBor3AtWhyInves')}</p>
              </div>
              <div className='flex justify-center m-4'>
                <p className='text-lg text-black'>{t('TextBor3AtWhyInves')} </p>
              </div>
            </div>
          </div>
        </div>
        <div className='empowerment absolute bottom-[-50px] right-0 z-0'>
                    <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
                        <path fill="#ebc012" className="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z" />
                        <path fill="#f5f5f5" className="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z" />
                    </svg>
        </div>
      </div>
    </section>
  );
};
