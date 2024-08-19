import React from 'react';
import { Title } from '@/components/commons/Title';
import ManConc from '@/public/assets/images/home/11879344_Checklist.jpg';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Conclusion = () => {
  const { t } = useTranslation();

  return (
    <section className='w-full my-20'>
      <div className='container p-20 max-sm:p-8 bg-white mx-auto grid grid-cols-3 gap-4 mb-5'>
        <div className='col-span-2'>
          <div className='h-full flex items-center justify-center'>
            <div className='w-full'>
              <Title>
                {t('TitleAtConclusion')}
              </Title>
              <p className='font-bold text-xl mb-5'>
                {t('TextStartAtConclusion')}
              </p>
              <p className='text-lg'>
                {t('TextMidAtConclusion')}
              </p>
              <p className='text-lg mt-5'>
                {t('TextEndAtConclusion')}
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='h-full flex relative top-[-0px] right-[20px] z-[0] items-center justify-center w-full'>
            <Image
              src={ManConc}
              alt=''
              className='w-[85%] h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
