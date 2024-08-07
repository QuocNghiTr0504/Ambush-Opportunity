import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu, Button } from 'antd';
import Link from 'next/link';

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
                visible={visible}
            >
                <Menu mode="inline">
                    <Menu.Item key="1">
                        <Link
                            href='/about'
                            className='text-gray-700 text-2xl hover:text-red-900'
                        >
                            <p className='text-lg'>About</p>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link
                            href='/contact'
                            className='text-gray-700 text-2xl hover:text-red-900'
                        >
                            <p className='text-lg'>Contact</p>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link
                            href='/login'
                            className='text-gray-700 text-2xl hover:text-red-900'
                        >
                            <p className='text-lg'>Login</p>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link
                            href='/register'
                            className='text-gray-700 text-2xl hover:text-red-900'
                        >
                            <p className='text-lg'>Sign-up</p>
                        </Link>
                    </Menu.Item>


                </Menu>
            </Drawer>
        </div>
    );
};

export default NavMenu;
