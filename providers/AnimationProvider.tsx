'use client'
import { AnimatePresence, motion } from 'framer-motion';
import { PAGE_VARIANTS } from '@/constants/PageVariant';
import { usePathname } from 'next/navigation';

export default function AnimatedPage({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={PAGE_VARIANTS}
            style={{ position: 'relative', minWidth: '100vw', minHeight: '100vh', overflow: 'hidden' }}

        >
            {children}
        </motion.div>
    );
}