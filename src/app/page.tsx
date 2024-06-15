import '../../styles/global.css';
import { Flex } from '@chakra-ui/react';
import { CssGrid } from '~/components/card';

export default function Home() {
    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            padding="6rem"
            minHeight="100vh"
        >
            <CssGrid />
        </Flex>
    );
}
