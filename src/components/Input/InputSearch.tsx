import { InputGroup, InputRightElement, Icon, Input } from "@chakra-ui/react";
import { useState } from "react";
import { BiSearchAlt } from 'react-icons/bi';

interface IInputAuth {
    placeholder?: string
    onClickSearch?: (input: string) => void;
}

export default function InputSearch({ placeholder, onClickSearch }: IInputAuth) {

  const [inputSearch, setInputSearch] = useState<string>('');

    return (
        <InputGroup bg="white" color="black">
            <Input
                placeholder={placeholder} onChange={e => setInputSearch(e.target.value)}
            />
            <InputRightElement> <Icon as={BiSearchAlt} onClick={() => {
                if (onClickSearch) onClickSearch(inputSearch);
            }} /> </InputRightElement>
        </InputGroup>
    )
}