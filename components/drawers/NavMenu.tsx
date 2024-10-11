import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu, Button } from 'antd';
import Link from 'next/link';
import { LocalizedLink } from '../commons/LocalizedLink';

const NavMenu = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const closeDrawer = () => {
        setVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} />
            <Drawer
                title="Menu"
                placement="right"
                onClose={closeDrawer}
                open={visible}
            >
                <Menu mode="inline">
                    <Menu.Item key="1">
                        <LocalizedLink
                            href='/about'
                            className='text-gray-700 text-2xl hover:text-red-900'
                        >
                            <p className='text-lg'>About</p>
                        </LocalizedLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <LocalizedLink
                            href='/contact'
                            className='text-gray-700 text-2xl hover:text-red-900'
                        >
                            <p className='text-lg'>Contact</p>
                        </LocalizedLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <LocalizedLink
                            href='/login'
                            className='text-gray-700 text-2xl hover:text-red-900'
                        >
                            <p className='text-lg'>Login</p>
                        </LocalizedLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <LocalizedLink
                            href='/register'
                            className='text-gray-700 text-2xl hover:text-red-900'
                        >
                            <p className='text-lg'>Sign-up</p>
                        </LocalizedLink>
                    </Menu.Item>


                </Menu>
            </Drawer>
        </div>
    );
};

export default NavMenu;
