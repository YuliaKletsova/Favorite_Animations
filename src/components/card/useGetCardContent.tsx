import { useMemo } from 'react';
import { Animations } from '~/constants';
import { RevealableText } from '../RevealableText';
import { AnimatedText } from '../rollable-link';

export type CssGridData = {
    title: string;
    content: JSX.Element;
    type?: Animations;
    colSpan: number;
}[];

export const useGetCardsContent = (): CssGridData => {
    const cardsContent = useMemo(
        () => [
            {
                title: 'ROLLABLE TEXT',
                content: <AnimatedText title="ROLLABLE TEXT" />,
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
            {
                title: 'REVEALABLE TEXT',
                content: <RevealableText text={'REVEALABLE TEXT'.split('')} />,
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
            {
                title: 'tmp1',
                content: <div>tmp1</div>,
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
            {
                title: 'tmp2',
                content: <div>tmp2</div>,
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
            {
                title: 'tmp3',
                content: <div>tmp3</div>,
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
            {
                title: 'tmp4',
                content: <div>tmp4</div>,
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
        ],
        []
    );

    return cardsContent;
};
