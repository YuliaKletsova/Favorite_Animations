'use client';
import React, { useState } from 'react';
import { Modal } from './modal';
import { useGetCardsContent } from './useGetCardContent';

export const CssGrid = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const boxStyle =
        'bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center';
    const data = useGetCardsContent();

    return (
        <>
            <div className="w-full grid grid-cols-4 grid-flow-row auto-rows-[100px] gap-4 my-10 ">
                {data.map(({ title, col }, i) => (
                    <div
                        key={i}
                        className={`${boxStyle} ${col}`}
                        onClick={() => setActiveItem(i)}
                    >
                        <div className="text-xl text-midnight font-semibold">
                            {title}
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                header={
                    typeof activeItem === 'number' ? data[activeItem].title : ''
                }
                isVisible={typeof activeItem === 'number'}
                onClose={() => setActiveItem(null)}
            >
                {typeof activeItem === 'number' ? (
                    <>{data[activeItem].modalContent}</>
                ) : (
                    <></>
                )}
            </Modal>
        </>
    );
};
