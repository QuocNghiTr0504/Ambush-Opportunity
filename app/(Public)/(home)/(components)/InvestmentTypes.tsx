"use client"
import Background from '@/public/assets/images/bg-image-2.webp'
import CheckIcon from '@/public/assets/images/check-faq.webp'
import { Title } from '@/components/commons/Title'
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export const InvestmentTypes = () => {
    const backgroundStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: '100% 50%',
        backgroundRepeat: 'no-repeat',
    }
    const { t } = useTranslation();
    return (
        <section style={backgroundStyle}>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center'>
                    <div className='mt-12'>
                        <Title barColor='white' barPosition='center'><p className='text-white'>
                            {t("TitAtTypes")} </p></Title>

                    </div>
                    <p className='text-center mb-8 text-white font-bold text-lg'>
                        {t("TextAtTypes")}
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className="px-8 py-6 bg-white rounded-lg shadow-lg">
                            <div className="flex gap-6">
                                <Image alt='' className="object-contain" src={CheckIcon}></Image>
                                <p className="font-bold text-2xl my-4">{t("TitBor1AtTypes")} </p>
                            </div>
                            <p className="text-lg">{t("TextBor1AtTypes")} </p>

                        </div>
                        <div className="px-8 py-6 bg-white rounded-lg shadow-lg">
                            <div className="flex gap-6">
                                <Image alt='' className="object-contain" src={CheckIcon}></Image>
                                <p className="font-bold text-2xl my-4">{t("TitBor2AtTypes")} </p>
                            </div>
                            <p className="text-lg"> {t("TextBor2AtTypes")} </p>

                        </div>
                        <div className="px-8 py-6 bg-white rounded-lg shadow-lg">
                            <div className="flex gap-6">
                                <Image alt='' className="object-contain" src={CheckIcon}></Image>
                                <p className="font-bold text-2xl my-4">{t("TitBor3AtTypes")} </p>
                            </div>
                            <p className="text-lg">{t("TextBor3AtTypes")} </p>

                        </div>
                        <div className="px-8 py-6 bg-white rounded-lg shadow-lg">
                            <div className="flex gap-6">
                                <Image alt='' className="object-contain" src={CheckIcon}></Image>
                                <p className="font-bold text-2xl my-4">{t("TitBor4AtTypes")} </p>
                            </div>
                            <p className="text-lg">{t("TextBor4AtTypes")}  </p>

                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}