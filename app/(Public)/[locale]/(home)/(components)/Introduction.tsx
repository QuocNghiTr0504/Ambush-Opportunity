"use client"
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { staggerVariants } from '@/constants/StaggerVariant';
import '@/app/styles/home.scss'
import { ExploreForm } from '@/components/forms/ExploreForm';

export const Introduction = () => {
  const { t } = useTranslation();
  return (
    <motion.div variants={staggerVariants} initial="initial" animate="in" exit="out"
    >


      <div className='stars-container'>
        <motion.div variants={staggerVariants} className='container relative z-10 py-36 px-4 justify-items-center items-center mx-auto grid gap-4 grid-cols-1 lg:grid-cols-2 '>
          <div>
            <motion.h1 variants={staggerVariants} className='text-5xl my-4 text-white font-bold '>{t('ItroductionTitle')}</motion.h1>
            <motion.h2 variants={staggerVariants} className='text-4xl my-4 text-white font-normal'>{t('ItroductionText')}</motion.h2>
          </div>
          <div>
            <ExploreForm />
          </div>
        </motion.div>
        <div className="stars">
          {Array(50).fill(0).map(i => (
            <div key={i.id} className="star"></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
