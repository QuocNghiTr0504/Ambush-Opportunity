"use client"
import React from 'react';
import DolassImg from '@/public/assets/images/home/spec.png';
import { Title } from '@/components/commons/Title';
import { Button } from '@/components/commons/Button';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Reveal } from '@/components/animations/Reveal';

const Investing = () => {
  const { t } = useTranslation();

  return (
    <section className='w-full'>
      <div className='container p-20 max-sm:p-8 bg-white mx-auto '>
        <div className='grid grid-cols-5 gap-x-4 mb-5'>
          <div className='col-span-3'>
            <div className='h-full flex items-center justify-center'>
              <div className='w-full'>
                <Reveal>
                  <Title>
                    {t('TitAtInvesting')}
                  </Title>
                </Reveal>
                <Reveal>
                  <p className='font-bold text-xl mb-5'>
                    {t('TextBoldAtInvesting')}
                  </p>
                </Reveal>
                <Reveal>
                  <p className='text-lg'>
                    {t('TextStartInvesting')}
                  </p>
                </Reveal>
                <Reveal>
                  <p className='text-lg mt-5'>
                    {t('TextEndInvesting')}
                  </p>
                </Reveal>
                <div className='text-start mt-3 mt-md-4 '>
                  <Button className='uppercase font-bold text-lg'>
                    {t('ButAtInvesting')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='h-full flex relative top-[-15px] right-[50px] z-[0] items-center justify-center w-full'>
              <Image
                src={DolassImg}
                alt=''
                className=' h-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investing;
