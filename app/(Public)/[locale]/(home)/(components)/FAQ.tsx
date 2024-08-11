"use client"
import React from 'react';
import { Title } from '@/components/commons/Title';
import { DropdownCard } from '@/components/commons/CardDown';
import { Button } from '@/components/commons/Button';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import {ArrowRightOutlined} from '@ant-design/icons';


const FAQ = () => {
  const { t } = useTranslation();

  return (
    <section>
  <div className='container p-20 bg-gray-100 mx-auto shadow-lg'>
    <div>
      <div className='mb-10'>
        <Title barPosition='center' className='tracking-wider'>
          {t('TitleAtFAQ')}
        </Title>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-7 gap-8 w-full cursor-pointer justify-center items-center'>
          <div className='col-span-2 hidden md:block lg:block text-center'>
            <ArrowRightOutlined style={{
                color:'#ecc012',
                fontSize: '100px', 
                margin: '2px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' 
              }} />
          </div>
          <div className='col-span-5'>
            <div className='boxFAQ rounded-xl border-l border-b border-maintext transition-transform transform hover:scale-105'>
              <DropdownCard
                header={t('Question1')}
                text={t('Answer1')}
              />
            </div>
            <div className='boxFAQ rounded-xl border-l border-b border-maintext transition-transform transform hover:scale-105 mt-8'>
              <DropdownCard
                header={t('Question2')}
                text={t('Answer2')}
              />
            </div>
            <div className='boxFAQ rounded-xl border-l border-b border-maintext transition-transform transform hover:scale-105 mt-8'>
              <DropdownCard
                header={t('Question3')}
                text={t('Answer3')}
              />
            </div>
          </div>
        
      </div>
    </div>
    <div className='text-center mt-20'>
      <Link href='register'>
        <Button className='text-lg uppercase px-5 py-3 text-white bg-mainbg hover:shadow-mainbg'>
          {t('ButtonAtFAQ')}
        </Button>
      </Link>
    </div>
  </div>
</section>

  );
};

export default FAQ;
