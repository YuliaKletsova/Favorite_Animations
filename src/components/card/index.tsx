'use client';
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useGetCardsContent } from './useGetCardContent';

export const CssGrid = () => {
    const animations = useGetCardsContent();

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
