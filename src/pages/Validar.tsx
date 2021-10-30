import moment from "moment";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spinner, Flex, Button, Stack } from "@chakra-ui/react";

import { IHired } from "../types";
import { StringUtils } from "../utils";
import { HiredController } from "../controllers";
import { DashboardContainer } from "../containers/Dashboard";
import { ArrayLabel, BasicLabel, CustomBarEmpty } from "../components";

export default function Validar() {
  const [hired, setHired] = useState<IHired>();

  //Funções para pegar parametros e router
  const params: any = useParams();
  let history = useHistory();

  useEffect(() => {
    //Função para buscar contratado no bancco de dados
    const fetch = async () => {
      const hiredDb: any = await HiredController.findByName(params.slug);
      setHired(hiredDb.data);
    };
    fetch();
  }, []);

  //Função para validar contratado
  const handleValidate = async () => {
    if (hired) {
      const hiredUpdate = {
        ...hired,
        valid: true,
        dateValidate: moment().valueOf(),
      };
      handleUpdate(hiredUpdate);
    }
  };

  //FUnção para não valdiar contratador
  const handleInvalidate = async () => {
    if (hired) {
      const hiredUpdate = {
        ...hired,
        valid: false,
        dateValidate: moment().valueOf(),
      };
      handleUpdate(hiredUpdate);
    }
  };

  //Função para realizar o update do contratado
  const handleUpdate = async (hiredUpdate: IHired) => {
    const response = await HiredController.update(hiredUpdate);
    setHired(hiredUpdate);
  };

  return (
    <DashboardContainer>
      <CustomBarEmpty>
        <Button colorScheme="red" onClick={history.goBack}>
          Voltar
        </Button>
      </CustomBarEmpty>
      {hired ? (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          <Flex direction="column">
            <BasicLabel title="CPF: " value={hired.cpf} />
            <BasicLabel title="Nome Completo: " value={hired.name} />
            <BasicLabel title="Email: " value={hired.email} />
            {hired.phone && hired.phone !== "" && (
              <BasicLabel
                title="Celular: "
                value={StringUtils.formatWithMask(
                  hired.phone,
                  StringUtils.masks.phone
                )}
              />
            )}
            <BasicLabel
              title="Validado: "
              value={hired.valid ? "sim" : "não"}
            />
            {hired.dateValidate != 0 && (
              <>
                <BasicLabel
                  title="Data da validação: "
                  value={moment(hired.dateValidate).format("DD/MM/YYYY")}
                />
                <BasicLabel
                  title="Hora da validação: "
                  value={moment(hired.dateValidate).format("HH:mm:ss")}
                />
              </>
            )}
            <ArrayLabel namelabel="Conhecimentos: " values={hired.knowledges} />
          </Flex>
          <Stack direction="row" spacing={2}>
            <Button colorScheme="red" onClick={handleInvalidate}>
              Não Validar
            </Button>
            <Button colorScheme="green" onClick={handleValidate}>
              Validar
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Spinner />
      )}
    </DashboardContainer>
  );
}
