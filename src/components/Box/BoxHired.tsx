import { Flex, Text } from "@chakra-ui/react";
import { IHired } from "../../types";

interface Props {
    item?: IHired;
    onClickRow: (item: IHired) => void;
}

export default function BoxHired({ item, onClickRow }: Props) {

    return (
        <Flex
            as="button"
            bg="white"
            color="black"
            _hover={{
                shadow: "lg"
            }}
            w="100%"
            p={2}
            onClick={() => onClickRow!(item!)}
            direction="row"
            justifyContent="space-between">
            <Flex w="50%">
                {item && <Text>{item.name}</Text>}
            </Flex>
            <Flex w="50%">
                {item && <Text>{item.valid ? "Validado" : "Não validado"}</Text>}
            </Flex>
        </Flex>
    )
}