'use-client'
import { useEffect, useState } from 'react';
import VN from '@/public/assets/images/VNflag.png';
import TW from '@/public/assets/images/TWflag.png';
import UK from '@/public/assets/images/UKflag.png';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { isSupportedLocale, SupportedLocale } from '@/helpers/langHelper';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { isClient } from '@/helpers/apiHelper';


const flags: any = {
    "en-US": UK,
    "vi-VN": VN,
    "zh-CN": TW,
}

export const LanguageSelect = () => {
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname();
    //Use the language that user has chosen previosly, otherwise use en-US
    const initLang = (isClient() ? localStorage.getItem('i18nextLng') : null) ?? 'en-US';
    const [langSelected, setLangSelected] = useState<string>(initLang);
    const { t, i18n } = useTranslation();
    const router = useRouter();


    const handleMouseEnter = (e: any) => {
        e.preventDefault();
        setOpen(true)
    }
    const handleMouseLeave = (e: any) => {
        e.preventDefault();
        setOpen(false)
    }

    useEffect(() => {
        let language = pathname.split('/')[1];
        if (isSupportedLocale(language)) {
            i18n.changeLanguage(language);
            setLangSelected(language)

        }
        else {
            router.push(langSelected + pathname)
        }
    }, [pathname])


    return (
        <div className='h-fit'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='language'>
                <div className='flex items-center text-gray-700 text-xl'>
                    <i className='fa-solid fa-earth-americas mr-3'></i>
                    <div className='flex items-center relative'>

                        <div className="relative inline-block cursor-pointer w-9 h-8 border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
                            <Image 
                                className="object-cover w-full h-full" 
                                src={flags[langSelected]} 
                                width={35} 
                                height={30} 
                                alt="country-flags" 
                            />
                        </div>


                        {isOpen && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
                                className='absolute  top-[calc(100%)] right-0  w-20 bg-white border border-gray-200 rounded-lg shadow-lg'
                            >
                                <ul className='py-2'>
                                    <li
                                        className=' cursor-pointer px-1 py-1 text-sm hover:bg-gray-100 h-8'
                                    >
                                        <Link href={'/vi-VN'} hrefLang='/vi-VN' className='flex items-center'>
                                            <Image
                                                src={VN}
                                                alt=''
                                                className='w-4 h-4 mr-3'
                                            />
                                            VN
                                        </Link>

                                    </li>
                                    <li
                                        className='flex items-center cursor-pointer px-1 py-1 text-sm hover:bg-gray-100 h-8'
                                    >
                                        <Link href={'/en-US'} hrefLang='en-US' className='flex items-center'>
                                            <Image
                                                src={UK}
                                                alt=''
                                                className='w-4 h-4 mr-3'
                                            />
                                            US
                                        </Link>
                                    </li>
                                    <li
                                        className='flex items-center cursor-pointer px-1 py-1 text-sm hover:bg-gray-100 h-8'
                                    >
                                        <Link href={'/zh-CN'} hrefLang='zh-CN' className='flex items-center'>
                                            <Image
                                                src={TW}
                                                alt=''
                                                className='w-4 h-4 mr-3'
                                            />
                                            TW
                                        </Link>
                                    </li>
                                </ul>
                            </motion.div>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
};
