'use client';
import { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '~/constants';

export const BorderedButton = ({
    text,
    style,
}: {
    text: string;
    style?: CSSProperties;
}) => (
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            borderRadius: '20px',
            ...(style ? style : {}),
            border: `3px solid transparent`,
            backgroundClip: 'padding-box, border-box',
            backgroundOrigin: 'padding-box, border-box',
        }}
    >
        {text}
    </motion.div>
);
