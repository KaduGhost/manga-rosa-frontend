import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ListBasic, BoxHired } from "../components";
import { DashboardContainer } from "../containers/Dashboard";
import { HiredController } from "../controllers";
import { IHired } from "../types";

export default function Registers() {
  const history = useHistory();
  const [hireds, setHireds] = useState<IHired[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const hiredsDb: any = await HiredController.findAll();
      setHireds(hiredsDb.data);
    };
    fetch();
  }, []);

  const handleClick = (name: string) => {
    history.push(`/${name}/validar`);
  };

  return (
    <DashboardContainer>
      <ListBasic
        perPage={10}
        initialPage={1}
        items={hireds}
        columns={["Nome", "Status"]}
        componentItem={
          <BoxHired
            onClickRow={(hired) => {
              handleClick(hired.name);
            }}
          ></BoxHired>
        }
        orderBy={(a: any, b: any) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        }}
        onClickSearch={(input) => {
          return (item: IHired) => {
             return (item.phone && item.phone.includes(input)) ||item.name.includes(input) || item.cpf.includes(input) || item.email.includes(input);
          };
        }}
      />
    </DashboardContainer>
  );
}
