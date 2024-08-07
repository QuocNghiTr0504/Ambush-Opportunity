import React from 'react';
import { Title } from '@/components/commons/Title';
import ManConc from '@/public/assets/images/home/11879344_Checklist.jpg';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Reveal } from '@/components/animations/Reveal';

const Conclusion = () => {
  const { t } = useTranslation();

  return (
    <section className='w-full my-20'>
      <div className='container p-20 bg-white mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-5'>
        <div className='md:col-span-2'>
          <div className='h-full flex items-center justify-center'>
            <div className='w-full'>
              <Reveal>

                <Title>
                  {t('TitleAtConclusion')}
                </Title>
              </Reveal>
              <Reveal>
                <p className='font-bold text-xl mb-5'>
                  {t('TextStartAtConclusion')}
                </p>
              </Reveal>
              <Reveal>
                <p className='text-lg'>
                  {t('TextMidAtConclusion')}
                </p>
              </Reveal>
              <Reveal>
                <p className='text-lg mt-5'>
                  {t('TextEndAtConclusion')}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='h-full flex relative top-[-0px] right-[20px] z-[0] items-center justify-center w-full'>
            <Reveal>
              <Image
                src={ManConc}
                alt=''
                className='w-[85%] h-auto'
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
