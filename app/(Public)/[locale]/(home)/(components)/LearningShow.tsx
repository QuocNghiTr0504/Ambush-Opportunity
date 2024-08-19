"use client"
import React from 'react';
import { Title } from '@/components/commons/Title';
import CheckIcon from '@/public/assets/images/check-faq.webp';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const LearningShow = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className='container bg-white p-20 max-sm:p-8 mx-auto'>
        <div className='flex flex-col items-center'>
          <div className='my-12'>
            <Title barPosition='center'>
              {t('TitAtLearning')}
            </Title>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='boxLearn'>
              <div className='px-8 py-1 bg-white rounded-lg shadow-sm h-fit'>
                <div className='flex gap-6'>
                  <Image
                    className='object-contain'
                    src={CheckIcon}
                    alt=''
                  />
                  <p className='font-bold text-2xl my-4'>{t('NameBox1AtLearning')}</p>
                </div>
              </div>
              <div className='p-5'>
                <p className='text-lg'>{t('TextBox1AtLearning')}</p>
              </div>
            </div>
            <div className='boxLearn'>
              <div className='px-8 py-1 bg-white rounded-lg shadow-sm h-fit'>
                <div className='flex gap-6'>
                  <Image
                    className='object-contain'
                    src={CheckIcon}
                    alt=''
                  ></Image>
                  <p className='font-bold text-2xl my-4'>{t('NameBox2AtLearning')}</p>
                </div>
              </div>
              <div className='p-5'>
                <p className='text-lg'>{t('TextBox2AtLearning')}</p>
              </div>
            </div>
            <div className='boxLearn'>
              <div className='px-8 py-1 bg-white rounded-lg shadow-sm h-fit'>
                <div className='flex gap-6'>
                  <Image
                    className='object-contain'
                    src={CheckIcon}
                    alt=''
                  ></Image>
                  <p className='font-bold text-2xl my-4'>{t('NameBox3AtLearning')}</p>
                </div>
              </div>
              <div className='p-5'>
                <p className='text-lg'>{t('TextBox3AtLearning')}</p>
              </div>
            </div>
            <div className='boxLearn'>
              <div className='px-8 py-1 bg-white rounded-lg shadow-sm h-fit'>
                <div className='flex gap-6'>
                  <Image
                    className='object-contain'
                    src={CheckIcon}
                    alt=''
                  ></Image>
                  <p className='font-bold text-2xl my-4'>{t('NameBox4AtLearning')}</p>
                </div>
              </div>
              <div className='p-5'>
                <p className='text-lg'>{t('TextBox4AtLearning')}</p>
              </div>
            </div>
            <div className='boxLearn'>
              <div className='px-8 py-1 bg-white rounded-lg shadow-sm h-fit'>
                <div className='flex gap-6'>
                  <Image
                    className='object-contain'
                    src={CheckIcon}
                    alt=''
                  ></Image>
                  <p className='font-bold text-2xl my-4'>{t('NameBox5AtLearning')}</p>
                </div>
              </div>
              <div className='p-5'>
                <p className='text-lg'>{t('TextBox5AtLearning')}</p>
              </div>
            </div>
            <div className='boxLearn'>
              <div className='px-8 py-1 bg-white rounded-lg shadow-sm h-fit'>
                <div className='flex gap-6'>
                  <Image
                    className='object-contain'
                    src={CheckIcon}
                    alt=''
                  ></Image>
                  <p className='font-bold text-xl my-4'>{t('NameBox6AtLearning')}</p>
                </div>
              </div>
              <div className='p-5'>
                <p className='text-lg'>{t('TextBox6AtLearning')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningShow;
