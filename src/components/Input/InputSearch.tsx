import { InputGroup, InputRightElement, Icon, Input } from "@chakra-ui/react";
import { BiSearchAlt } from 'react-icons/bi';

interface IInputAuth {
    placeholder?: string
}

export default function InputSearch({ placeholder }: IInputAuth) {
    return (
        <InputGroup bg="white" color="black">
            <Input
                placeholder={placeholder}
            />
            <InputRightElement> <Icon as={BiSearchAlt} /> </InputRightElement>
        </InputGroup>
    )
}