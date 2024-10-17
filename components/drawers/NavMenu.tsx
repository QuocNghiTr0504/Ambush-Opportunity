import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu, Button } from 'antd';
import { LocalizedLink } from '../commons/LocalizedLink';
import { useTranslation } from 'react-i18next';
import AmbushLogo from '@/public/assets/images/Ambush Opportunity_logo3_lightUse.png'
import Image from 'next/image'


const NavMenu = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const closeDrawer = () => {
        setVisible(false);
    };
    const {t} = useTranslation()
    const items = [
        {
            key: '1',
            label: (
                <LocalizedLink
                    href='/about'
                    className='text-gray-700 text-2xl hover:text-red-900'
                >
                    <p className='text-lg'>{t('AboutAtHeader')}</p>
                </LocalizedLink>
            ),
        },
        {
            key: '2',
            label: (
                <LocalizedLink
                    href='/contact'
                    className='text-gray-700 text-2xl hover:text-red-900'
                >
                    <p className='text-lg'>{t('ContactAtHeader')}</p>
                </LocalizedLink>
            ),
        },
        {
            key: '3',
            label: (
                <LocalizedLink
                    href='/login'
                    className='text-gray-700 text-2xl hover:text-red-900'
                >
                    <p className='text-lg'>{t('SigninHeader')}</p>
                </LocalizedLink>
            ),
        },
        {
            key: '4',
            label: (
                <LocalizedLink
                    href='/register'
                    className='text-gray-700 text-2xl hover:text-red-900'
                >
                    <p className='text-lg'>{t("SignupAtHeader")}</p>
                </LocalizedLink>
            ),
        },
    ];

    return (
        <div className='flex justify-around'>    
            <Drawer
                title={<Image src={AmbushLogo} alt="" className="max-w-[240px]" />}
                placement="right"
                onClose={closeDrawer}
                open={visible}
            >
                <Menu className='tracking-wider' mode="inline" items={items} />
            </Drawer>
            <Button type="primary" className='flex justifly-end' onClick={showDrawer} icon={<MenuOutlined />} />
        </div>
    );
};

export default NavMenu;
