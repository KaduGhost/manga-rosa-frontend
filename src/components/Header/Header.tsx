import { Flex, Text, Box } from '@chakra-ui/react';
import Logo from './Logo';

interface Props {
    title?: string;
}

export default function Header({ title }: Props) {

    return (
        <Flex
            as="header"
            w="100%"
            bg="pink" color="black" position="static"
            maxHeight="33vh"
            justifyContent="space-between"
            alignItems="center"
            pr={3}
            pl={3}>
            <Logo />
            <Text fontSize="40" fontWeight="800">Manga Rosa Ltda</Text>
            {title && <Box alignSelf="center">
                <Text color="white" fontWeight={800} fontSize={30}>{title}</Text>
            </Box>}
        </Flex>
    )
}