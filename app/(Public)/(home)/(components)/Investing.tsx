"use client"
import React from 'react';
import DolassImg from '@/public/assets/images/home/spec.png';
import { Title } from '@/components/commons/Title';
import { Button } from '@/components/commons/Button';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Reveal } from '@/components/animations/Reveal';
import { LocalizedLink } from '@/components/commons/LocalizedLink';

const Investing = () => {
  const { t } = useTranslation();

  return (
    <section className='w-full'>
      <div className='container p-20 bg-white mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-x-4 mb-5'>
          <div className='md:col-span-3'>
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
                <div className='my-10 flex justify-center items-center'>
                  <LocalizedLink href='/register'>
                    <Button className='uppercase font-bold text-lg'>
                      {t('ButAtInvesting')}
                    </Button>
                  </LocalizedLink>
                </div>
              </div>
            </div>
          </div>
          <div className='md:col-span-2'>
            <div className='h-full flex relative  md:top-[-35px] right-[50px] z-[0] items-center justify-center w-full'>
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
