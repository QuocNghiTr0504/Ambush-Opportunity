"use client"
import React from 'react';
import Background from '@/public/assets/images/home/What_is_Investing.jpg'; // Adjust the path to your image file
import { Title } from '@/components/commons/Title';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Reveal } from '@/components/animations/Reveal';

export const WhatIsInvesting = () => {
    const { t } = useTranslation();
    return (
        <section >
            <div className='bg-white p-20 mx-auto'>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-start">
                    <div className="col-span-2 relative  lg:top-24">
                        <Reveal>
                            <Image
                                src={Background}
                                alt="Trading platform on laptop and phone"
                                className="w-full rounded-lg  "
                            />
                        </Reveal>
                    </div>
                    <div className="col-span-4 space-y-4 text-gray-900">
                        <Reveal>
                            <div className="flex items-center space-x-2">
                                <Title className='tracking-wider'>
                                    {t('TitAtWhatInves')}
                                </Title>
                            </div>
                        </Reveal>
                        <Reveal>
                            <p className=" font-bold text-lg">
                                {t('TextBoldAtWhatInves')}

                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="text-lg">

                                {t('TextStartAtWhatInves')}
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="text-lg">

                                {t('TextEndWhatInves')}
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

