import CheckIcon from '@/public/assets/images/check-faq.webp';
import { t } from 'i18next';
import { Reveal } from '../animations/Reveal';
import Image from 'next/image';
interface Props {
    title: string,
    content: string
}
export const ShortFeatureCard: React.FC<Props> = ({ title, content }: Props) => {
    return (
        <div className='boxLearn'>
            <div className='px-8 py-1 bg-white rounded-lg shadow-sm h-fit'>
                <div className='flex gap-6'>
                    <Image
                        className='object-contain'
                        src={CheckIcon}
                        alt=''
                    />
                    <Reveal>
                        <p className='font-bold text-2xl my-4'>{title}</p>
                    </Reveal>
                </div>
            </div>
            <div className='p-5'>
                <Reveal>
                    <p className='text-lg'>{content}</p>
                </Reveal>
            </div>
        </div>
    )
}