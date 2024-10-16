import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu, Button } from 'antd';
import { LocalizedLink } from '../commons/LocalizedLink';
import { useTranslation } from 'react-i18next';

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
        <div>
            <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} />
            <Drawer
                title="Menu"
                placement="right"
                onClose={closeDrawer}
                open={visible}
            >
                <Menu mode="inline" items={items} />
            </Drawer>
        </div>
    );
};

export default NavMenu;
