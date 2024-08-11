"use client"
import { Button } from '@/components/commons/Button';
import { Title } from '@/components/commons/Title';
import { useTranslation } from 'react-i18next';
import Background from '@/public/assets/images/home/test.png';
import Image from 'next/image';
import { motion } from 'framer-motion'
import { staggerVariants } from '@/constants/StaggerVariant';
import { Reveal } from '@/components/animations/Reveal';
export const GeneralInformation = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: '29%',
    backgroundRepeat: 'no-repeat',
  };

  const { t } = useTranslation();
  return (
    <section className='w-full relative top-[-50px] z-10 mx-auto' >
      <motion.div variants={staggerVariants} whileInView="in" initial="initial" exit="out" className='bg-gray-50 shadow-2xl container rounded-lg p-20  mx-auto'>
        <Title className='tracking-wider ml-12'>{t('TitleAtGenerall')}</Title>
        <div className='grid justify-items-center grid-cols-1 lg:grid-cols-7'>
          <div className='lg:col-span-4'>
            <Reveal>
              <p className='text-lg  mb-6'>{t('TextBoldAtGenerall')}</p>
            </Reveal>
            <Reveal>
              <p className='text-lg mb-6'>{t('TextStartAtGen')}</p>
            </Reveal>
            <Reveal>
              <p className='text-lg mb-6'>{t('TextMidAtGen')}</p>
            </Reveal>
            <Reveal>
              <p className='text-lg mb-6'>{t('TextEndAtGen')}</p>
            </Reveal>
          </div>
          <div className='flex flex-col lg:col-span-3 lg:relative lg:top-[-30px] lg:right-[-30px] '>
            <Image alt='' className='object-cover w-auto' src={Background}></Image>
            <div className='w-full flex items-center justify-center mt-10'>
              <Reveal>
                <Button className='text-white bg-mainbg hover:shadow-mainbg '>{t('ButtonAtGen')}</Button>
              </Reveal>

            </div>
          </div>
        </div>


      </motion.div>
    </section>
  );
};
