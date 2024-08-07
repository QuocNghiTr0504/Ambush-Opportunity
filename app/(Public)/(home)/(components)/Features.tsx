"use client"
import React from 'react';
import { Title } from '@/components/commons/Title';
import { useTranslation } from 'react-i18next';

import { FeatureCard } from '@/components/cards/FeatureCard';
import { Reveal } from '@/components/animations/Reveal';

const EmpowermentSection = () => {
  const { t } = useTranslation();
  return (
    <section className='py-12 relative'>
      <div className='empowerment h-[900px] absolute top-[-200px] z-0'>
        <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
          <path fill="#ebc012" className="out-top" d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z" />
          <path fill="#fff" className="in-top" d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z" />

        </svg>
      </div>

      <div className='container relative flex justify-end z-10 p-8 mx-auto'>
        <div className='max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='col-span-1 md:col-span-2 p-8 rounded-lg text-gray-900 space-y-4 bg-white'>
            <div className='flex items-center space-x-2 rounded-md'>
              <Reveal>
                <Title className='tracking-wider'>{t('TitleAtEm')}</Title>
              </Reveal>
            </div>
            <div className='space-y-2'>
              <Reveal>
                <h3 className='text-lg font-semibold'>{t('TitleSmallAtEm')}</h3>
              </Reveal>
              <Reveal>
                <p className='text-lg'>{t('TextAtEm')}</p>
              </Reveal>
            </div>
          </div>
          <Reveal textReveal={false}>
            <FeatureCard title1={t('TitBoxAtEm')} title2={t('TitSmBoxAtEm')} features={[t('Text1BoxAtEm'), t('Text2BoxAtEm')]} />
          </Reveal>
          <Reveal textReveal={false}>
            <FeatureCard title1={t('TitBoxAtEm2')} title2={t('TitSmBoxAtEm2')} features={[t('Text1BoxAtEm2'), t('Text2BoxAtEm2')]} />
          </Reveal>
        </div>
      </div>
    </section >
  );
};

export default EmpowermentSection;
