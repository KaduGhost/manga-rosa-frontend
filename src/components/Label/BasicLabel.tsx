import { Flex, Text, FlexProps } from '@chakra-ui/react';

interface ILabel extends FlexProps {
    title: string;
    value: string;
    size?: number;
}

export default function BasicLabel({title, value, size, ...res}: ILabel) {

    const fontSize = size || 18;

    return(
        <Flex direction="row" {...res}>
            <Text fontSize={fontSize} fontWeight="600">{title}</Text>
            <Text fontSize={fontSize} ml={2}>{value}</Text>
        </Flex>
    )
}