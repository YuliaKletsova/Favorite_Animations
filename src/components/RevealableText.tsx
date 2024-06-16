'use client';
import { CSSProperties, useState } from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '~/constants';

export const RevealableText = ({
    text,
    animationDuration,
    style,
    type,
}: {
    text: string;
    animationDuration?: number;
    style?: CSSProperties;
    type: 'symbol' | 'word';
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const separator = type === 'symbol' ? '' : ' ';

    let parts = text.split(separator);
    if (type === 'word') {
        parts = parts.map((part, i) =>
            i !== parts.length - 1 ? part + ' ' : part
        );
    }

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {parts.map((el, i) => (
                <motion.span
                    initial={{ opacity: 1 }}
                    animate={isHovered ? { opacity: 0 } : undefined}
                    transition={{
                        duration: animationDuration || 0.15,
                        delay: i / 10,
                        type: 'spring',
                    }}
                    key={i}
                    style={{
                        fontSize: '1.5rem',
                        lineHeight: '2rem',
                        fontWeight: 600,
                        color: COLORS.violet,
                        ...(style ? style : {}),
                    }}
                >
                    {el}
                </motion.span>
            ))}
        </div>
    );
};
