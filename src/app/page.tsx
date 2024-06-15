import { CssGrid, CssGridData } from '~/components/card';
import { RevealableTextModal } from '~/components/RevealableText';
import { AnimatedTextModal } from '~/components/rollable-link';

const animationsToShow: CssGridData = [
    {
        title: 'ROLLABLE TEXT',
        modalContent: <AnimatedTextModal />,
    },
    {
        title: 'REVEALABLE TEXT',
        modalContent: <RevealableTextModal />,
    },
    {
        title: 'tmp1',
        modalContent: <div>tmp1</div>,
    },
    {
        title: 'tmp2',
        modalContent: <div>tmp2</div>,
    },
    {
        title: 'tmp3',
        modalContent: <div>tmp3</div>,
    },
    {
        title: 'tmp4',
        modalContent: <div>tmp4</div>,
    },
];

export default function Home() {
    function getRandom() {
        const random = Math.floor(Math.random() * 4);
        if (random === 0) return '';
        else return 'col-span-' + random;
    }

    const data = animationsToShow.map((animation) => ({
        ...animation,
        colClass: getRandom(),
    }));

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <CssGrid data={data} />
        </main>
    );
}
