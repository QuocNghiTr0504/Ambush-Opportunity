"use client"
import React from 'react';
import Background from '@/public/assets/images/home/why-register.jpg'; // Adjust the path to your image file
import { Title } from '@/components/commons/Title';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Button } from '@/components/commons/Button';
import { useRouter } from 'next/navigation';
import { Reveal } from '@/components/animations/Reveal';


export const WhyRegister = () => {
    const router = useRouter();
    const { t } = useTranslation();
    return (
        <section className='relative min-h-[900px]'>
            <div className='container  mx-auto'>
                <div className='max-w-screen-xl relative z-10 rounded-xl shadow-xl  bg-white p-20 max-sm:p-8'>

                    <div className="flex items-center space-x-2">
                        <Reveal>
                            <Title >
                                {t('TitAtWhyReg')}
                            </Title>
                        </Reveal>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-start">
                        <div className="col-span-4 space-y-4">
                            <Reveal>
                                <p className="text-gray-600 text-lg leading-8">
                                    {t('TextAtWhyReg')}
                                </p>
                            </Reveal>
                            <Reveal>
                                <p className="text-gray-600 text-lg leading-8">
                                    {t('TextAtWhyReg2')}
                                </p>
                            </Reveal>
                            <div className='w-full flex justify-center items-center'>
                                <Button onClick={() => router.push('/register')}>Register now</Button>

                            </div>
                        </div>
                        <div className="col-span-2 relative top-[-100px]">
                            <Reveal textReveal={false} >
                                <Image
                                    src={Background}
                                    alt="Trading platform on laptop and phone"
                                    className="w-full  rounded-lg "
                                />
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className='empowerment absolute bottom-[-50px] right-0 z-0'>
                    <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
                        <path fill="#f79400f9" className="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z" />
                        <path fill="#f5f5f5" className="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z" />
                    </svg>
                </div>

            </div>
        </section>
    );
};

