import { useMemo } from 'react';
import { Animations } from '~/constants';
import { RevealableText } from '../RevealableText';
import { AnimatedText } from '../rollable-link';
import { BorderedButton } from '../BorderedButton';

export type CssGridData = {
    content: JSX.Element;
    type?: Animations;
    colSpan: number;
}[];

export const useGetCardsContent = (): CssGridData => {
    const cardsContent = useMemo(
        () => [
            {
                content: <AnimatedText title="ROLLABLE TEXT" />,
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
            {
                content: <RevealableText text={'REVEALABLE TEXT'.split('')} />,
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
            {
                content: <BorderedButton />,
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
            {
                content: <div>tmp2</div>,
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
            {
                content: <div>tmp3</div>,
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
            {
                content: <div>tmp4</div>,
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
        ],
        []
    );

    return cardsContent;
};
