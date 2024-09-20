'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNotification } from '@/redux/slices/notificationSlice';
import { AuthAPI } from '@/api/auth/AuthAPI';
import { Spin, Button } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion'
import { PAGE_VARIANTS } from '@/constants/PageVariant';
import { useRouter, useSearchParams } from 'next/navigation';
interface ConfirmEmailProps { }

const ConfirmEmailPage: React.FC<ConfirmEmailProps> = () => {
    // const [statusMessage, setStatusMessage] = useState('');
    // const [confirmStatus, setConfirmStatus] = useState<'WAITING_TO_CONFIRM' | 'CONFIRMING' | 'CONFIRMED' | 'CONFIRM_FAILED'>('WAITING_TO_CONFIRM');
    // const searchParams = useSearchParams();
    // const status = searchParams.get('status');
    // const userId = searchParams.get('userId');
    // const token = searchParams.get('token');

    // const router = useRouter();
    // const dispatch = useDispatch();
    // const email = localStorage.getItem("registeredEmail");

    // useEffect(() => {
    //     if (status && userId && token) {
    //         setConfirmStatus('CONFIRMING');
    //     } else if (email) {
    //         setConfirmStatus('WAITING_TO_CONFIRM');
    //     } else {
    //         router.push('/');
    //         dispatch(setNotification({ message: "Invalid action", type: "error" }));
    //     }
    // }, [status, userId, token, email, router, dispatch]);

    // useEffect(() => {
    //     const confirmEmail = async () => {
    //         try {
    //             const response = await AuthAPI.confirmEmail(userId!, token!);

    //             if (response.status === 200) {
    //                 setConfirmStatus('CONFIRMED');
    //                 localStorage.removeItem("registeredEmail")
    //             }
    //             else {
    //                 setConfirmStatus('CONFIRM_FAILED')
    //             }
    //         } catch (error) {
    //             setConfirmStatus('CONFIRM_FAILED')
    //         }
    //     };

    //     if (confirmStatus === 'CONFIRMING') {
    //         confirmEmail();
    //     } else if (confirmStatus === 'WAITING_TO_CONFIRM' && email) {
    //         setStatusMessage('Waiting for email confirmation for email: ' + email);
    //     } else if (confirmStatus === 'CONFIRM_FAILED') {
    //         debugger;
    //         setStatusMessage('Email verification failed. Please try again.');
    //     } else if (confirmStatus === 'CONFIRMED') {
    //         setStatusMessage('Your email has been successfully verified! You are about to redirect to login page');
    //         setTimeout(() => { router.push("/") }, 2000)
    //     }
    // }, [confirmStatus, email, router, token, userId]);

    // const handleResendEmail = async () => {
    //     try {
    //         const response = await AuthAPI.resendConfirmationEmail(email!);
    //         if (response.status === 200) {
    //             setStatusMessage('Verification email resent. Please check your inbox.');
    //             dispatch(setNotification({ message: "Verification email resent successfully", type: "success" }));
    //         } else {
    //             setStatusMessage('Failed to resend verification email. Please try again.');
    //             dispatch(setNotification({ message: "Failed to resend verification email", type: "error" }));
    //         }
    //     } catch (error: any) {
    //         let err = error.response.data.title;
    //         setStatusMessage('Failed to resend verification email. ' + err);
    //         dispatch(setNotification({ message: "Error: " + err, type: "error" }))
    //     }
    // };

    // return (
    //     <motion.div
    //         initial="initial"
    //         variants={PAGE_VARIANTS}
    //         animate="in"
    //         exit="out"
    //         className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    //         <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
    //             <h2 className="text-2xl mb-4">{statusMessage}</h2>
    //             {confirmStatus === 'WAITING_TO_CONFIRM' && (
    //                 <Button type="primary" onClick={handleResendEmail}>Resend Verification Email</Button>
    //             )}
    //             {confirmStatus === 'CONFIRMING' && (
    //                 <Spin indicator={<LoadingOutlined style={{ fontSize: '48px' }} spin />} />
    //             )}
    //             {confirmStatus === 'CONFIRMED' && (
    //                 <CheckCircleOutlined style={{ fontSize: '48px', color: '#52c41a' }} />
    //             )}
    //             {confirmStatus === 'CONFIRM_FAILED' && (
    //                 <CloseCircleOutlined style={{ fontSize: '48px', color: '#f5222d' }} />
    //             )}
    //         </div>
    //     </motion.div>
    // );
    return <></>
};

export default ConfirmEmailPage;
