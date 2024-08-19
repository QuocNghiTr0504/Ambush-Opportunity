"use client"
import React from 'react';
import { Title } from '@/components/commons/Title';
import CheckIcon from '@/public/assets/images/check-faq.webp';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Reveal } from '@/components/animations/Reveal';
import { ShortFeatureCard } from '@/components/cards/ShortFeatureCard';

const LearningShow = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className='container bg-white p-20 max-sm:p-8 mx-auto'>
        <div className='flex flex-col items-center'>
          <div className='my-12'>
            <Reveal>
              <Title barPosition='center'>
                {t('TitAtLearning')}
              </Title>
            </Reveal>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {Array(6).fill(0).map((item, index) => (
              <ShortFeatureCard key={index} title={t(`NameBox${index + 1}AtLearning`)} content={t(`TextBox${index + 1}AtLearning`)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningShow;
