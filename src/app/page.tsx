import { CssGrid } from '~/components/card';
import { AnimatedLinkModal } from '~/components/rollable-link';

const animationsToShow = [
    {
        title: 'ROLLABLE LINK',
        modalContent: <AnimatedLinkModal />,
    },
];

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <CssGrid data={animationsToShow} />
        </main>
    );
}
