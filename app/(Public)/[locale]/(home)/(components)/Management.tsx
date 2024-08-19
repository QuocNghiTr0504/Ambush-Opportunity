"use client"

import React, { useState } from 'react';
import ManaImg from '@/public/assets/images/home/management.jpg';
import { Title } from '@/components/commons/Title';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Management = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const { t } = useTranslation();

  return (
    <section className='w-full'>
      <div className='container p-20 max-sm:p-8 bg-white mx-auto grid grid-cols-3 gap-4 mb-5'>
        <div className='col-span-1'>
          <div className='h-full flex relative top-[50px] z-[0] items-center justify-center w-full'>
            <Image
              src={ManaImg}
              alt='management'
              className='max-w-full h-auto'
            />
          </div>
        </div>
        <div className='col-span-2'>
          <div className='h-full flex items-center justify-center'>
            <div className='w-full'>
              <Title>
                {t('TitAtMana')}
              </Title>
              <p className='font-bold text-xl mb-5'>{t('TextBoldAtMana')}</p>
              <p className='text-lg mb-3'>{t('TextContentMana')}</p>
              {isReadMore && (
                <p className='text-lg'>
                  {t('TextMoreAtMana')}
                  <br />
                  <br />
                  {t('TextMoreAtMana2')}
                  <br />
                  <br />
                  {t('TextMoreAtMana3')}
                  <br />
                  <br />
                  {t('TextMoreAtMana4')}
                </p>
              )}
              <button
                onClick={handleReadMore}
                className='mt-3 text-blue-500 text-lg'
              >
                {isReadMore ? t('ButLessAtMana') : t('ButMoreAtMana')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;
