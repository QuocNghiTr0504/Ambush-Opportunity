import CheckIcon from '@/public/assets/images/check-faq.webp';
import { t } from 'i18next';
import { Reveal } from '../animations/Reveal';
import Image from 'next/image';
import { CheckCircleOutlined } from '@ant-design/icons';
interface Props {
    title: string,
    content: string
}
export const ShortFeatureCard: React.FC<Props> = ({ title, content }: Props) => {
    return (
        <div className='boxLearn'>
            <div className='px-8 py-1 bg-transperant rounded-lg shadow-sm h-fit bg-'>
                <div className='flex gap-6'>
                <CheckCircleOutlined style={{
                    color: '#7ed843', 
                    fontSize: '24px', 
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                }} />
                    <Reveal>
                        <p className='font-bold text-2xl my-4 tracking-wider text-maintext shadow-sm'>{title}</p>
                    </Reveal>
                </div>
            </div>
            <div className='p-5'>
                <Reveal>
                    <p className='text-lg text-white'>{content}</p>
                </Reveal>
            </div>
        </div>
    )
}