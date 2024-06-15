'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedWord } from './AnimatedWord';

const transition = {
    duration: 0.3,
    ease: [0.6, 0.01, 0.05, 0.95],
    type: 'tween',
};

const titleTransition = {
    staggerChildren: 0.03,
};

export const AnimatedText = ({ title }: { title: string }) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <motion.span
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="text-midnight font-semibold overflow-hidden relative text-2xl"
        >
            <div>
                <AnimatedWord
                    title={title}
                    animation={{
                        rest: {
                            y: 0,
                        },
                        hover: {
                            y: -30,
                            transition,
                        },
                    }}
                    isHovered={isHovered}
                    titleTransition={titleTransition}
                />
            </div>
            <div className="absolute top-0">
                <AnimatedWord
                    title={title}
                    animation={{
                        rest: {
                            y: 30,
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
