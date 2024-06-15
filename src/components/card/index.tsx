'use client';
import React, { useState } from 'react';
import { Animations } from '~/constants';
import { Modal } from './modal';

export type CssGridData = {
    title: string;
    modalContent: JSX.Element;
    type?: Animations;
}[];

export const CssGrid = ({ data }: { data: CssGridData }) => {
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const boxStyle =
        'bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center';

    return (
        <>
            <div className="w-full grid grid-cols-4 auto-rows-[100px] gap-4 my-10 ">
                {data.map(({ title }, i) => {
                    const random = Math.floor(Math.random() * 3) + 1;

                    return (
                        <div
                            key={i}
                            className={`${boxStyle} md:col-span-${random}`}
                            onClick={() => setActiveItem(i)}
                        >
                            <div className="text-xl text-midnight font-semibold">
                                {title}
                            </div>
                        </div>
                    );
                })}
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
