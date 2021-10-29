import { Flex, FlexProps } from '@chakra-ui/react';
import { Header } from '../../components/';

interface Props extends FlexProps{
    title?: string;
}

export default function DashboardContainer({title, children}: Props) {
    return (
        <Flex
            w="100%"
            direction="column" h="100vh">
            <Header title={title}/>
            {children}
        </Flex>
    )
}