'use client';
import { ChangeEvent, useState } from 'react';
import { ModalControls } from '../ModalControls';
import { AnimatedText } from './AnimatedText';

export const AnimatedTextModal = (): JSX.Element => {
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
            <AnimatedText title={input} />
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
