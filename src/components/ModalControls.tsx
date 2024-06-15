import { ChangeEvent } from 'react';

export const ModalControls = ({
    maxSymbols,
    handleChange,
    handleReset,
    value,
    isDisabled,
}: {
    maxSymbols: number;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleReset: () => void;
    value: string;
    isDisabled: boolean;
}) => {
    return (
        <div className="flex flex-row gap-8 w-full pt-8">
            <div className="relative w-8/12">
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    className="w-full border-single border-2 border-midnight rounded-md p-1 pl-4"
                />
                <div className="absolute top-1.5 right-1 text-gray-300">
                    {value.length}/{maxSymbols}
                </div>
            </div>
            <button
                disabled={isDisabled}
                onClick={handleReset}
                className="w-4/12 bg-midnight text-white rounded-md disabled:text-gray-300 disabled:bg-white"
            >
                RESET
            </button>
        </div>
    );
};
