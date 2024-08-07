'use client'
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotification } from '@/redux/slices/notificationSlice';
import { notification } from 'antd';
import { RootState } from '@/redux/store';

export const Notification = () => {
    const dispatch = useDispatch();
    const { message, type } = useSelector((state: RootState) => state.notification);

    const handleClose = useCallback(() => {
        dispatch(clearNotification());
    },[dispatch])

    React.useEffect(() => {
        if (message && type) {
            notification[type]({
                message: 'Notification',
                description: message,
                placement: "bottomRight",
                onClose: handleClose,
            });
        }
    }, [handleClose, message, type]);

    return null;
};
