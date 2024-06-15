import { Animations } from '~/constants';
import { RevealableTextModal } from '../RevealableText';
import { AnimatedTextModal } from '../rollable-link';

export type CssGridData = {
    title: string;
    modalContent: JSX.Element;
    type?: Animations;
    col?: string;
}[];

export const useGetCardsContent = (): CssGridData => [
    {
        title: 'ROLLABLE TEXT',
        modalContent: <AnimatedTextModal />,
        col: `col-span-${Math.floor(Math.random() * 3) + 1}`,
    },
    {
        title: 'REVEALABLE TEXT',
        modalContent: <RevealableTextModal />,
        col: `col-span-${Math.floor(Math.random() * 3) + 1}`,
    },
    {
        title: 'tmp1',
        modalContent: <div>tmp1</div>,
        col: `col-span-${Math.floor(Math.random() * 3) + 1}`,
    },
    {
        title: 'tmp2',
        modalContent: <div>tmp2</div>,
        col: `col-span-${Math.floor(Math.random() * 3) + 1}`,
    },
    {
        title: 'tmp3',
        modalContent: <div>tmp3</div>,
        col: `col-span-${Math.floor(Math.random() * 3) + 1}`,
    },
    {
        title: 'tmp4',
        modalContent: <div>tmp4</div>,
        col: `col-span-${Math.floor(Math.random() * 3) + 1}`,
    },
];
