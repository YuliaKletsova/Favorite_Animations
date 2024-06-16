'use client';
import React, { useEffect, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Animations } from '~/constants';
import { RevealableText } from '../RevealableText';
import { RollingUpDown } from '../rollable';
import { BorderedButton } from '../BorderedButton';
import { NotFound } from '../NotFound';

type CssGridData = {
    content: JSX.Element;
    type?: Animations;
    colSpan: number;
}[];

export const CssGrid = () => {
    const [animations, setAnimations] = useState<CssGridData>([]);

    useEffect(() => {
        setAnimations([
            {
                content: <RollingUpDown title="ROLLABLE TEXT" />,
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
            {
                content: (
                    <RevealableText text="REVEALABLE TEXT" type="symbol" />
                ),
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
            {
                content: <BorderedButton text={'YOU SPIN ME RIGHT ROUND...'} />,
                colSpan: Math.floor(Math.random() * 3) + 1,
            },
            {
                content: <NotFound />,
                colSpan: 1,
            },
        ]);
    }, []);

    return (
        <Grid
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            gridAutoFlow="row dense"
            gridAutoRows="150px"
            gap="1rem"
            mt="2.5rem"
            width="100%"
        >
            {animations.map(({ content, colSpan }, i) => (
                <GridItem
                    key={i}
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#f7fafc',
                        border: '2px solid #e2e8f0',
                        borderRadius: '0.75rem',
                        padding: '0.5rem 0.75rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    background="white"
                    colSpan={colSpan}
                >
                    {content}
                </GridItem>
            ))}
        </Grid>
    );
};
