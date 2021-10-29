import { InputGroup, InputLeftElement, Icon, Input, InputProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { IForm } from '../../interfaces';
import { FormContainer } from '../../containers/Form';
import InputMask from "react-input-mask";

interface InputCustom extends InputProps, IForm {
    icon?: ElementType;
    colorIcon?: string;
    placeholder?: string;
    mask?: string;
    required?: boolean;
}

export default function InputCustom({ onClickRemember, typeForm, colorIcon, icon, namelabel, placeholder, typeInput, menssager, messageIconColor, titleWeight, mask, required, ...res }: InputCustom) {

    return (
        <FormContainer namelabel={namelabel} menssager={menssager} messageIconColor={messageIconColor} titleWeight={titleWeight ? titleWeight : 600} typeInput={typeInput} typeForm={typeForm} onClickRemember={onClickRemember} required={required}>
            <InputGroup>
                {icon && <InputLeftElement color={colorIcon ? colorIcon : "black"}> <Icon as={icon} /> </InputLeftElement>}
                <Input
                    as={InputMask}
                    id={namelabel}
                    name={namelabel}
                    type={typeInput}
                    placeholder={placeholder}
                    mask={mask}
                    {...res}
                />
            </InputGroup>
        </FormContainer>
    )
}