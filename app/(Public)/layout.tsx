'use client'
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { fetchAuthTokenThunk } from '@/redux/slices/authSlice';
import Layout, { Content } from 'antd/es/layout/layout';
import NavHeader from '@/components/layout/Header';
import WebFooter from '@/components/layout/Footer';
import AnimatedPage from '@/providers/AnimationProvider';


export default function PublicRouteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchAuthTokenThunk());

    }, [dispatch]);

    return (

        <AnimatedPage>
            <NavHeader />

            {children}

            <WebFooter />
        </AnimatedPage>

    );
};



