import { Transition, motion } from 'framer-motion';

export const AnimatedWord = ({
    title,
    animation,
    isHovered,
    titleTransition,
}: {
    title: string;
    animation: { rest: object; hover: object };
    isHovered: boolean;
    titleTransition: Transition | undefined;
}) => {
    return (
        <motion.span
            variants={{
                rest: {
                    transition: titleTransition,
                },
                hover: {
                    transition: titleTransition,
                },
            }}
            initial="rest"
            animate={isHovered ? 'hover' : 'rest'}
            style={{ position: 'relative' }}
        >
            {title.split('').map((character, i) =>
                character === ' ' ? (
                    <span key={i}>&nbsp;</span>
                ) : (
                    <motion.span
                        key={i}
                        variants={animation}
                        style={{
                            position: 'relative',
                            display: 'inline-block',
                        }}
                    >
                        {character}
                    </motion.span>
                )
            )}
        </motion.span>
    );
};
