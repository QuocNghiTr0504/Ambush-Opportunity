"use client"
import { Title } from '@/components/commons/Title';
import EduImg from '@/public/assets/images/home/education-firm.jpg';
import { Button } from '@/components/commons/Button';
// import { Button } from '@/components/commons/Button';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Reveal } from '@/components/animations/Reveal';


const EducationFirm = () => {
  const { t } = useTranslation();
  return (
    <section className='w-full'>
      <div className='container p-20 max-sm:p-8 bg-white mx-auto grid grod-cols-1 md:grid-cols-3 gap-4 mb-5'>
        <div className='md:col-span-2'>
          <div className='h-full flex items-center justify-center'>
            <div className='w-full'>
              <Reveal>
                <Title>
                  {t("TitAtEdu")}
                </Title>
              </Reveal>
              <Reveal>
                <p className='font-bold text-xl mb-5'>
                  {t("TextBoldAtEdu")}
                </p>
              </Reveal>
              <Reveal>
                <p className='text-lg'>
                  {t("TextStartAtEdu")}
                </p>
              </Reveal>
              <Reveal>
                <p className='text-lg'>
                  {t('TextStartBrAtEdu')}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='h-full flex relative top-[-15px] z-[0] items-center justify-center w-full'>
            <Reveal>
              <Image
                src={EduImg}
                alt=''
                className='max-w-full h-auto'
              />
            </Reveal>
          </div>
        </div>


      </div>

    </section >
  );
};

export default EducationFirm;
