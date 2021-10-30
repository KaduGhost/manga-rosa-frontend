import { Stack, ListItem } from '@chakra-ui/react';

interface IDisplayItem {
    value: object | string;
    index: number;
}

export default function DisplayItem({ value, index }: IDisplayItem) {
    return (
        <Stack spacing={2} direction="row" pl={2}>
            <ListItem key={index}>
                {value}
            </ListItem>
        </Stack>
    )
}