import { CheckboxGroup, Stack, Checkbox } from "@chakra-ui/react";
import { IForm } from '../../interfaces';
import { FormContainer } from '../../containers/Form/';

interface CheckBox extends IForm {
    values?: string[];
    labelNames: string[];
    labelValues: string[];
    change: (values: string[]) => void;
}

export default function CheckBox({  onClickRemember, typeForm, namelabel, values, labelNames, labelValues, change, menssager, messageIconColor, titleWeight, typeInput }: CheckBox) {

    return (
        <FormContainer namelabel={namelabel} menssager={menssager} messageIconColor={messageIconColor} titleWeight={titleWeight ? titleWeight : 600} typeInput={typeInput} typeForm={typeForm} onClickRemember={onClickRemember}>
            <CheckboxGroup colorScheme="green" value={values} onChange={(e: string[]) => change(e)}>
                <Stack direction="row">
                    {labelValues.map((label, index) => {
                        return <Checkbox key={index} value={label}>{labelNames[index]}</Checkbox>
                    })}
                </Stack>
            </CheckboxGroup>
        </FormContainer>
    )
}