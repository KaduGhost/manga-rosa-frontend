import { Flex, Text, List } from '@chakra-ui/react';
import DisplayItem from './ItemLabel';

interface Props {
    namelabel: string;
    values: object[] | string[];
}
export default function DisplayArray({namelabel, values}: Props) {
    return (
        <Flex flexDirection="column">
            <Text fontWeight="600" fontSize="18">{namelabel}</Text>
            <List >
                {values.map((value, index) => {
                    return <DisplayItem key={index} value={value} index={index}/>
                })}
            </List>
        </Flex>
    )
}