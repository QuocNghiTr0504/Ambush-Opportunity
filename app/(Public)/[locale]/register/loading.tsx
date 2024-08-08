'use client'
// components/Loading.tsx
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loading = () => {
    const [dots, setDots] = useState('.');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(dots => {
                switch (dots) {
                    case '.':
                        return '..';
                    case '..':
                        return '...';
                    default:
                        return '.';
                }
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white">
            <motion.div className="flex items-center justify-center">
                <svg
                    className="h-12 w-12 text-main mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <motion.circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        animate={{
                            opacity: [1, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: 'loop',
                            repeatDelay: 0.5,
                        }}
                    />
                </svg>
                <span className="text-main text-2xl font-semibold">Loading{dots}</span>
            </motion.div>
        </div>
    );
};

export default Loading;
