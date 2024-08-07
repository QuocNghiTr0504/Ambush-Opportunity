"use client"
import React from 'react';
import Background from '@/public/assets/images/highlight-bg.webp';
import { Title } from '@/components/commons/Title';
import { useTranslation } from 'react-i18next';

const Highlight = () => {
  const { t } = useTranslation();

  return (
    <div
      className='flex justify-center p-20 bg-cover bg-center w-full'
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div>
        <div className='mb-5'>
          <h2 className='title title-center'>
            <Title barPosition='center'>{t('TitleAtHighlight')}</Title>
          </h2>
        </div>
        <div className='w-full bg-gray-50 p-5 border border-maintext rounded-2xl shadow-2xl'>
          <div id='emojitable' className='grid grid-cols-2 mt-5'>
            <div className='px-8 py-4 border-r border-maintext font-bold text-xl'>🤖 {t('LeftCol1')} </div>
            <div className='px-8 py-4 text-xl'>{t('RightCol1')}</div>
          
            <div className='px-8 py-4 border-r border-maintext rounded-l-lg text-xl font-bold bg-yellow-100'>
              💰 {t('LeftCol2')}
            </div>
            <div className='px-8 py-4 rounded-r-lg text-xl bg-yellow-100'>{t('RightCol2')}</div>

            <div className='px-8 py-4 border-r border-maintext text-xl font-bold'>📋 {t('LeftCol3')} </div>
            <div className='px-8 py-4 text-xl'>{t('RightCol3')}</div>

            <div className='px-8 py-4 border-r border-maintext rounded-l-lg text-xl font-bold bg-yellow-100'>
              📊 {t('LeftCol4')}
            </div>
            <div className='px-8 py-4 rounded-r-lg text-xl bg-yellow-100'>{t('RightCol4')}</div>

            <div className='px-8 py-4 border-r border-maintext text-xl font-bold'>🌎 {t('LeftCol5')} </div>
            <div className='px-8 py-4 text-xl'>{t('RightCol5')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
