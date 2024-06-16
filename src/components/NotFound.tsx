'use client';
import { SVGProps, useState } from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '~/constants';

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        transition: {
            type: 'tween',
            ease: 'linear',
            duration: 2,
        },
    },
    visible: {
        opacity: 1,
        pathLength: 1,
    },
};

export const NotFound = ({
    width,
    height,
    strokeWidth,
    strokeLinecap,
    stroke,
}: Pick<
    SVGProps<SVGSVGElement>,
    'width' | 'height' | 'strokeWidth' | 'strokeLinecap' | 'stroke'
>) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.svg
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            width={width || '150'}
            height={height || '200'}
            viewBox="0 0 454 250"
            strokeWidth={strokeWidth || '10'}
            strokeLinecap={strokeLinecap || 'round'}
            stroke={stroke || COLORS.violet}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                d="M89.9778 228V9L11 156H136.089"
                variants={pathVariants}
                initial="visible"
                animate={isHovered ? 'hidden' : ''}
            />
            <motion.path
                d="M232.991 228C280.633 228 288 160.318 288 115.841C288 68.2426 280.633 9 232.991 9C183.063 9 177.001 71.0465 177 120.192C176.999 167.086 184.757 228 232.991 228Z"
                variants={pathVariants}
                initial="visible"
                animate={isHovered ? 'hidden' : ''}
            />
            <motion.path
                d="M404.659 228V9L327 156H450"
                variants={pathVariants}
                initial="visible"
                animate={isHovered ? 'hidden' : ''}
            />
        </motion.svg>
    );
};
