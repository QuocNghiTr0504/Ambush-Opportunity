"use client"
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileThunk, logout } from "@/redux/slices/authSlice";
import { Button } from "antd";
import { CSSProperties, useEffect, useState } from "react";
import Link from "next/link";
import { LanguageSelect } from "@/components/commons/LanguageSelect";
import { Header } from "antd/es/layout/layout"
import logo from '@/public/assets/images/logo-head.png';
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import { breakpoints } from "@/constants/Breakpoint";
import NavMenu from "../drawers/NavMenu";
import { usePathname } from "next/navigation";
import { SystemColor as SystemColor } from "@/constants/Color";
export default function NavHeader() {
    const { isAuthenticated, userInfo } = useSelector((state: RootState) => state.auth)
    const pathname = usePathname()

    const isHomePage = pathname == '/';
    const dispatch = useDispatch<AppDispatch>();
    const isMdScreen = useMediaQuery(breakpoints.md);
    const isXsScreen = useMediaQuery(breakpoints.xs);
    const isSmScreen = useMediaQuery(breakpoints.sm);
    const [bgOpacity, setBgOpacity] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const opacity = Math.min(scrollY / 100, 0.7); // Change 100 to the value at which you want max opacity
        setBgOpacity(opacity);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(fetchProfileThunk());
        }
    }, [dispatch, isAuthenticated])

    const headerStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        padding: '0px 10px',
        background: 'transparent',
        left: 0,
        right: 0,
        position: "fixed",
        backgroundColor: isHomePage ? `rgba(0, 0, 0, ${bgOpacity})` : SystemColor.grayBackground,
        zIndex: 999,
    };

    const renderWelcomeAuthenticatedUser = () => {
        return (
            <div className="flex gap-2 items-center">
                <p className='text-white font-bold'>Welcome {userInfo?.userName}</p>
                <Button onClick={() => { dispatch(logout()) }} type='primary' danger className='text-white'>Logout</Button>
            </div>
        )
    }

    const renderNavigationLink = () => {
        return (
            <header>

                <ul style={{ color: SystemColor.navLink }} className={`flex gap-16`}>
                    <li>
                        <Link
                            href='/about'
                            prefetch
                            className=' text-lg'
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            prefetch
                            href='/contact'
                            className=' text-lg'
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            prefetch
                            href='/contact'
                            className=' text-lg'
                        >
                            Price
                        </Link>
                    </li>
                    <li>
                        <Link
                            prefetch
                            href='/contact'
                            className=' text-lg'
                        >
                            Why us?
                        </Link>
                    </li>


                </ul>

            </header>
        )
    }
    const renderButtons = () => {
        return (
            <ul style={{ color: SystemColor.navLink }} className={`flex  space-x-4`}>
                <li>
                    <Link
                        href='/login'
                        prefetch
                        className=' text-lg'
                    >
                        Sign in
                    </Link>
                </li>
                <li>
                    <Link
                        prefetch
                        href='/register'
                        className=' text-lg'
                    >
                        Sign up
                    </Link>
                </li>
            </ul>
        )
    }
    return (
        <header style={headerStyle}>
            <div className='container mx-auto h-[100px] w-full'>
                <div className='h-full flex flex-wrap items-center align-middle justify-between'>

                    <Link prefetch href='/'>
                        <Image
                            className="max-h-[70px] w-auto object-cover"
                            src={logo}
                            alt='Logo'
                        />
                    </Link>

                    {
                        !(isMdScreen || isXsScreen || isSmScreen) &&
                        <>
                            {renderNavigationLink()}
                            <div className="flex items-center">
                                {isAuthenticated ? renderWelcomeAuthenticatedUser() : renderButtons()}
                                <LanguageSelect />
                            </div>

                        </>
                    }

                    {
                        (isMdScreen || isXsScreen || isSmScreen) &&
                        <div className="flex items-center gap-2">
                            <LanguageSelect />
                            <NavMenu />
                        </div>
                    }
                </div>
            </div>

        </header>
    )
}