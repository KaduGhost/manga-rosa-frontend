import { FormControl, FormLabel, FormControlProps, Text, Box, Flex, Stack, Link } from '@chakra-ui/react';
import { IForm } from '../../interfaces';

interface IFormContainer extends IForm, FormControlProps {
    titleWeight?: number;
    onClickRemember?: () => void;
    typeInput?: string;
    typeForm?: string;
    required?: boolean
}

export default function FormContainer({ typeForm, typeInput, onClickRemember, namelabel, menssager, messageIconColor, children, titleWeight, required, ...res }: IFormContainer) {

    const handleRemember = onClickRemember ? onClickRemember : () => {}

    return (
        <FormControl {...res}>
            <FormLabel>
                <Stack justifyContent="space-between" isInline>
                    <Flex>
                        <Text fontSize={18} fontWeight={titleWeight}>{namelabel} {required && "(Obrigatório)"}</Text>
                    </Flex>
                    {typeInput === "password" &&  typeForm !== "register" && <Box
                        className="link"
                        fontSize="sm"
                        fontWeight="500"
                        onClick={() => handleRemember()}>
                        <Link>Esqueceu a senha?</Link>
                    </Box>}
                </Stack>
            </FormLabel>
            {children}
        </FormControl>
    )
}