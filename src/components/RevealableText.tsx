'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '~/constants';

export const RevealableText = ({ text }: { text: string[] }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text.map((el, i) => (
                <motion.span
                    initial={{ opacity: 1 }}
                    animate={isHovered ? { opacity: 0 } : undefined}
                    transition={{
                        duration: 0.15,
                        delay: i / 10,
                        type: 'spring',
                    }}
                    key={i}
                    style={{
                        fontSize: '1.5rem',
                        lineHeight: '2rem',
                        fontWeight: 600,
                        color: COLORS.violet,
                    }}
                >
                    {el}
                </motion.span>
            ))}
        </div>
    );
};
