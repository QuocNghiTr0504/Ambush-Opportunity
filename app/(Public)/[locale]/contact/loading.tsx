'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 z-50"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.2, 1], opacity: 1 }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                }}
                className="relative"
            >
                <svg className="w-24 h-24 text-white" viewBox="0 0 24 24">
                    <motion.path
                        fill="currentColor"
                        d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </svg>
                <motion.div
                    className="absolute inset-0 rounded-full bg-white opacity-30"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-white text-xl font-semibold"
            >
                Loading...
            </motion.p>
        </motion.div>
    );
};

export default Loading;