import CheckIcon from '@/public/assets/images/check-faq.webp';
import Image from 'next/image';
import SmallCheckIcon from '@/public/assets/images/check.webp';
import { Reveal } from '../animations/Reveal';

interface Props {
    features?: string[]
    title1: string,
    title2: string
}
export const FeatureCard: React.FC<Props> = ({ features, title1, title2 }: Props) => {
    return (
        <div>
            <div className='bg-white px-8 py-4 rounded-lg shadow-md my-4'>
                <div className='flex items-center space-x-2'>
                    <Image
                        src={CheckIcon}
                        alt='Check Icon'
                        className='w-6 h-6'
                    />
                    <Reveal>
                        <h4 className='text-lg font-semibold text-gray-800'>{title1}</h4>
                    </Reveal>
                </div>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-lg space-y-2'>
                <h5 className='text-sm font-semibold text-gray-800'>{title2}</h5>
                <ul className='list-none text-lg  font-medium text-gray-600 space-y-2'>
                    {
                        features?.map(item => (
                            <li key={item} className='flex items-start'>
                                <Image
                                    src={SmallCheckIcon}
                                    alt='Small Check Icon'
                                    className='w-4 h-4 mr-2'
                                />
                                <Reveal>
                                    <p>{item}</p>
                                </Reveal>
                            </li>

                        ))
                    }
                </ul>
            </div>
        </div>)
}