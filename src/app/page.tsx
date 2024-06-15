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
];

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <CssGrid data={animationsToShow} />
        </main>
    );
}
