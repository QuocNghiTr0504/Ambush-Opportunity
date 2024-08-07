import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
    children: JSX.Element | JSX.Element[];
    width?: 'fit-content' | '100%';
    mode?: 'vertical' | 'horizontal';
    textReveal?: boolean
}

export const Reveal: React.FC<Props> = ({ children, width = 'fit-content', mode = 'horizontal', textReveal = true }: Props) => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const control = useAnimation();

    const variant = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 }
    };

    const revealVariant = {
        visible: { x: '100%', transition: { duration: 1, ease: [0.77, 0, 0.18, 1] } },
        hidden: { x: '-100%' }
    };

    useEffect(() => {
        if (isInView)
            control.start("visible");
    }, [isInView, control]);

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div variants={variant} initial="hidden" animate={control} transition={{ duration: 0.5, delay: 0.2 }}>
                {children}
            </motion.div>
            {
                textReveal &&
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: '#ecc012',
                        zIndex: 1
                    }}
                    variants={revealVariant}
                    initial="hidden"
                    animate={control}
                />
            }

        </div>
    );
};
