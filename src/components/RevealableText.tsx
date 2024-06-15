'use client';
import { ChangeEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ModalControls } from './ModalControls';

const RevealableText = ({ text }: { text: string[] }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text.map((el, i) => (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={isHovered ? { opacity: 1 } : undefined}
                    transition={{
                        duration: 0.25,
                        delay: i / 10,
                    }}
                    key={i}
                >
                    {el}
                </motion.span>
            ))}
        </div>
    );
};

export const RevealableTextModal = () => {
    const initialValue = 'HOVER ME OR CHANGE THE TEXT FIRST';
    const maxSymbols = 35;
    const [input, setInput] = useState(initialValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length <= maxSymbols) {
            setInput(value);
        } else {
            setInput(value.slice(0, maxSymbols));
        }
    };

    const handleReset = () => setInput(initialValue);

    return (
        <div className="text-black flex flex-col justify-center items-center w-full pt-8 gap-8">
            <div className="flex border-dashed border-2 border-midnight p-4 text-midnight text-2xl">
                <RevealableText text={input.split('')} />
            </div>
            <ModalControls
                maxSymbols={maxSymbols}
                value={input}
                handleChange={handleChange}
                handleReset={handleReset}
                isDisabled={initialValue === input}
            />
        </div>
    );
};
