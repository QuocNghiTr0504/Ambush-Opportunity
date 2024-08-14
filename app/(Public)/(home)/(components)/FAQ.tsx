"use client"
import React from 'react';
import { Title } from '@/components/commons/Title';
import { DropdownCard } from '@/components/commons/CardDown';
import { Button } from '@/components/commons/Button';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { LocalizedLink } from '@/components/commons/LocalizedLink';

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className='container p-20 bg-white mx-auto'>
        <div>
          <div className='mb-10'>
            <Title barPosition='center'>
              {t('TitleAtFAQ')}
            </Title>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
            <div className='boxFAQ'>
              <DropdownCard
                header={t('Question1')}
                text={t('Answer1')}
              />
            </div>
            <div className='boxFAQ'>
              <DropdownCard
                header={t('Question2')}
                text={t('Answer2')}
              />
            </div>
            <div className='boxFAQ'>
              <DropdownCard
                header={t('Question3')}
                text={t('Answer3')}
              />
            </div>
          </div>
        </div>
        <div className='text-center mt-20'>
          <LocalizedLink href='register'>
            <Button className='text-lg uppercase px-5'>
              {t('ButtonAtFAQ')}
            </Button>
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
