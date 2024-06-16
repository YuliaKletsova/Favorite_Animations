'use client';
import React, { CSSProperties, useState } from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '~/constants';
import { AnimatedWord } from './AnimatedWord';

const transition = {
    duration: 0.3,
    ease: [0.6, 0.01, 0.05, 0.95],
    type: 'tween',
};

const titleTransition = {
    staggerChildren: 0.03,
};

export const RollingUpDown = ({
    title,
    style,
}: {
    title: string;
    style?: CSSProperties;
}) => {
    const [isHovered, setHovered] = useState(false);
    const diff = style?.fontSize
        ? parseInt(String(style?.fontSize), 10) + 50
        : 50;

    return (
        <motion.span
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                fontSize: '1.5rem',
                lineHeight: '2rem',
                fontWeight: 600,
                color: COLORS.violet,
                ...(style ? style : {}),
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div>
                <AnimatedWord
                    title={title}
                    animation={{
                        rest: {
                            y: 0,
                        },
                        hover: {
                            y: -diff,
                            transition,
                        },
                    }}
                    isHovered={isHovered}
                    titleTransition={titleTransition}
                />
            </div>
            <div style={{ position: 'absolute', top: 0 }}>
                <AnimatedWord
                    title={title}
                    animation={{
                        rest: {
                            y: diff,
                        },
                        hover: {
                            y: 0,
                            transition,
                        },
                    }}
                    isHovered={isHovered}
                    titleTransition={titleTransition}
                />
            </div>
        </motion.span>
    );
};
