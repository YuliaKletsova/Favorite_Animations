import { motion } from 'framer-motion';
import { COLORS } from '~/constants';

export const BorderedButton = () => (
    <motion.div
        initial={{
            backgroundImage: `linear-gradient(to right, white, white), linear-gradient(0deg, ${COLORS.violet}, white 40%)`,
        }}
        animate={{
            backgroundImage: `linear-gradient(to right, white, white), linear-gradient(360deg, ${COLORS.violet}, white 40%)`,
        }}
        transition={{
            type: 'tween',
            ease: 'linear',
            duration: 2,
            repeat: Infinity,
        }}
        style={{
            border: '3px solid transparent',
            borderRadius: '20px',
            backgroundClip: 'padding-box, border-box',
            backgroundOrigin: 'padding-box, border-box',
            width: 160,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        WOW, I`m animated
    </motion.div>
);
