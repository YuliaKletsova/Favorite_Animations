'use client';
import { ChangeEvent, useState } from 'react';
import { Controls } from '../controls';
import { AnimatedLink } from './AnimatedLink';

export const AnimatedLinkModal = () => {
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
            <AnimatedLink title={input} href="/" />
            <Controls
                maxSymbols={maxSymbols}
                value={input}
                handleChange={handleChange}
                handleReset={handleReset}
                isDisabled={initialValue === input}
            />
        </div>
    );
};
