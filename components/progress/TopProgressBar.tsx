'use client'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { hideProgressBar } from '@/redux/slices/progressBarSlice';
const TopProgressBar: React.FC = () => {
    const { percent, visible } = useSelector((state: RootState) => state.progressBar);
    const dispatch = useDispatch();

    useEffect(() => {
        let timer: any;
        if (percent === 100) {
            timer = setTimeout(() => {
                dispatch(hideProgressBar());
            }, 500);  // Adjust the delay as needed
        }
        return () => clearTimeout(timer);
    }, [dispatch, percent]);

    return (
        <div className={`fixed top-0 left-0 h-[3px] w-full z-[1000] ${visible ? 'visible' : 'invisible'} `}>
            <div style={{ width: `${percent}%` }} className='transition-[width] duration-1000 h-full bg-blue-600' />
        </div>
    );
};

export default TopProgressBar;
