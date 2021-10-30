import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DashboardContainer } from "../containers/Dashboard";
import { HiredController } from "../controllers";
import { IHired } from "../types";
import { Spinner, Flex, Button, Stack } from "@chakra-ui/react";
import { ArrayLabel, BasicLabel, CustomBarEmpty } from "../components";
import { StringUtils } from "../utils";
import moment from "moment";
import { useHistory } from "react-router-dom";

export default function Validar() {
  const [hired, setHired] = useState<IHired>();

  const params: any = useParams();
  let history = useHistory();

  useEffect(() => {
    const fetch = async () => {
      const hiredDb: any = await HiredController.findByName(params.slug);
      setHired(hiredDb.data);
    };
    fetch();
  }, []);

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

  const handleInvalidate = async () => {
    if (hired) {
      const hiredUpdate = {
        ...hired,
        valid: false,
        dateValidate: 0,
      };
      handleUpdate(hiredUpdate);
    }
  };

  const handleUpdate = async (hiredUpdate: IHired) => {
    const response = await HiredController.update(hiredUpdate);
    console.log(response);
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
