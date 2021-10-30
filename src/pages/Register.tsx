import { useParams } from "react-router-dom";
import { Flex, Text, Stack, Button, useToast } from "@chakra-ui/react";
import { DashboardContainer } from "../containers/Dashboard";
import { InputCustom, CheckBox } from "../components";
import { useState } from "react";
import { StringUtils } from "../utils";
import { IHiredRegister } from "../types";
import * as CpfValidator from "cpf-cnpj-validator";
import { checkCandidate } from "../validators";
import { HiredController } from "../controllers";

export default function Register() {
  const params: any = useParams();
  const toast = useToast();

  const [cpfValid, setCpfValid] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [knowledges, setKnowledge] = useState<string[]>([]);

  const transforHired = (): IHiredRegister => {
    return {
      name,
      email,
      cpf,
      phone,
      knowledges,
      cpfValid,
      valid: false,
    };
  };

  const submit = async () => {
    const hiredUpdate = transforHired();
    let result = await checkCandidate(hiredUpdate);
    if (result.valid) {
      const response: any = await HiredController.save(hiredUpdate);
      if (response.error) {
        toast({
          title: response.error.message,
          status: "error",
          isClosable: true,
        });
      } else {
        toast({
          title: "Cadastro feita com sucesso",
          status: "success",
          isClosable: true,
        });
      }
    } else {
      toast({
        title: result.title,
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <DashboardContainer>
      <Flex alignItems="center" justifyContent="center" w="100%" p={8}>
        <Stack
          w="100%"
          justifyContent="center"
          direction="column"
          alignItems="center"
          spacing={8}
        >
          <Text fontSize={40} fontWeight={600}>
            Registro para {params.slug}
          </Text>
          <Flex w="100%" direction="column">
            <InputCustom
              namelabel="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
            <InputCustom
              namelabel="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <InputCustom
              namelabel="CPF"
              value={cpf}
              onChange={(e) => {
                setCpf(e.target.value);
                setCpfValid(CpfValidator.cpf.isValid(e.target.value));
              }}
              mask="999.999.999-99"
              required={true}
            />
            <InputCustom
              namelabel="Celular"
              value={phone}
              onChange={(e) =>
                setPhone(StringUtils.removeMaskNumber(e.target.value))
              }
              mask="(99) 99999-9999"
            />
            <CheckBox
              values={knowledges}
              labelNames={[
                "Git",
                "React",
                "PHP",
                "NodeJS",
                "DevOps",
                "Banco de Dados",
                "TypeScript",
              ]}
              labelValues={[
                "Git",
                "React",
                "PHP",
                "NodeJS",
                "DevOps",
                "Banco de Dados",
                "TypeScript",
              ]}
              namelabel="Conhecimentos"
              change={(e) => {
                if (e.length <= 3) setKnowledge(e);
                else {
                  toast({
                    title: "Você só pode escolher até 3 conhecimentos",
                    status: "error",
                    isClosable: true,
                  });
                }
              }}
            />
          </Flex>
          <Flex>
            <Button bg="green.400" onClick={submit}>
              Cadastrar
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </DashboardContainer>
  );
}
