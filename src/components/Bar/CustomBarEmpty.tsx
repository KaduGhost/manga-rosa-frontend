import { Flex, Stack } from '@chakra-ui/react';

export default function SearchBar(props: any) {
    return (
        <Flex w="100%" bg="gray.50" p={1}>
            <Stack direction="row" spacing={10} w="100%">
                {props.children}
            </Stack>
        </Flex>
    )
}