export const staggerVariants = {
    initial: { opacity: 0, x: -40 },
    in: {
        opacity: 1,
        x: 0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        }
    },
    out: { opacity: 0, x: -40 }
};