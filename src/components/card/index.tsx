'use client';
import React, { useState } from 'react';
import { ANIMATION_TYPE, Animations } from '~/constants';
import { Modal } from '../modal';

// Function to get a random span class
const getSpan = (type?: Animations) => {
    if (type === ANIMATION_TYPE.TEXT) {
        return 'md:col-span-1';
    }

    const random = Math.floor(Math.random() * 4) + 1;
    return `md:col-span-${random}`;
};

export const CssGrid = ({
    data,
}: {
    data: {
        title: string;
        modalContent: JSX.Element;
        type?: Animations;
    }[];
}) => {
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const boxStyle =
        'bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center';

    return (
        <>
            <div className="w-full grid grid-flow-row-dense md:grid-cols-4 auto-rows-[100px] gap-4 my-10">
                {data.map(({ title, type }, i) => (
                    <div
                        key={i}
                        className={`${boxStyle} ${getSpan(type)}`}
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
