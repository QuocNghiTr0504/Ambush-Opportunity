"use client"
import React from 'react';
import Background from '@/public/assets/images/home/why_register_main.jpeg'; 
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
        <section className='h-full relative'>
            <div className='mx-auto'>
                <div className='md:rounded-xl shadow-xl  bg-[#2d443d] p-20'>
                    <div className="flex items-center space-x-2">
                        <Reveal>
                            <Title className='tracking-wider text-maintext'>
                                {t('TitAtWhyReg')}
                            </Title>
                        </Reveal>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-16 items-center justify-start">
                        <div className="col-span-4 space-y-4 lg:w-[85%]">
                            <Reveal>
                                <p className="text-white text-lg leading-8">
                                    {t('TextAtWhyReg')}
                                </p>
                            </Reveal>
                            <Reveal>
                                <p className="text-white text-lg leading-8 mb-12">
                                    {t('TextAtWhyReg2')}
                                </p>
                            </Reveal>
                            <div className='w-full flex justify-center items-center text-white'>
                                <Button onClick={() => router.push('/register')}>Register now</Button>
                            </div>
                        </div>
                        <div className="col-span-2 hidden lg:block">
                            <Reveal textReveal={false} >
                                <Image
                                    src={Background}
                                    alt="Trading platform on laptop and phone"
                                    className="w-full  rounded-lg h-full"
                                />
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

