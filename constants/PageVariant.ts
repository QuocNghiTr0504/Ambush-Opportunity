export const PAGE_VARIANTS = {
    initial: {
        scale: 0.8,
        opacity: 0,
        filter: 'blur(10px)',
        transition: {
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1.000]
        }
    },
    in: {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1.000]
        }
    },
    out: {
        scale: 1.2,
        opacity: 0,
        filter: 'blur(10px)',
        transition: {
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1.000]
        }
    }
};