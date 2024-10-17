import React, { useState } from 'react';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
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
        <div className="">
          <Drawer
            title={
              <div className="flex items-center w-full space-x-2">
                <Button
                  onClick={closeDrawer}
                  icon={<CloseOutlined />}
                  className='hover:text-red-500'
                />
                <Image src={AmbushLogo} alt="" className="max-w-[240px]" />
              </div>
            }
            placement="right"
            onClose={closeDrawer}
            open={visible}
            closeIcon={false} 
          >
            <Menu className="tracking-wider" mode="inline" items={items} />
          </Drawer>
          <Button
            type="primary"
            onClick={showDrawer}
            icon={<MenuOutlined />}
          />
        </div>
      );
};

export default NavMenu;
