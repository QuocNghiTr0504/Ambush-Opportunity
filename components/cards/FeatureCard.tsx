import { Reveal } from '../animations/Reveal';
import { CheckCircleOutlined } from '@ant-design/icons';
import {ArrowRightOutlined} from '@ant-design/icons';
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
                    <CheckCircleOutlined style={{
                        color: '#7ed843', 
                        fontSize: '24px', 
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' 
                    }} />
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
                            <li key={item} className='flex gap-2 items-start'>
                                <ArrowRightOutlined style={{
                                    color:'#7ed843',
                                    fontSize: '24px', 
                                    margin: '2px',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' 
                                }} />
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