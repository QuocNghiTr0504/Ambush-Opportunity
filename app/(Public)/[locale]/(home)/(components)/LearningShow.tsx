"use client";
import React from 'react';
import { Title } from '@/components/commons/Title';
import { useTranslation } from 'react-i18next';
import { Reveal } from '@/components/animations/Reveal';
import { ShortFeatureCard } from '@/components/cards/ShortFeatureCard';

const LearningShow = () => {
  const { t } = useTranslation();

  return (
    <section >
      <div className="bg-mainbg p-20 mx-auto py-20">
        <div className="flex flex-col items-center gap-10">
          <Reveal>    
            <Title className="tracking-wider text-maintext" barPosition="center">
              {t('TitAtLearning')}
            </Title>
          </Reveal>
          <hr/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array(6).fill(null).map((_, index) => (
            <div
              key={index}
              className={`relative ${index % 2 === 1 ? 'mt-20' : ''}`}
            >
             
              <ShortFeatureCard
                title={t(`NameBox${index + 1}AtLearning`)}
                content={t(`TextBox${index + 1}AtLearning`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningShow;
