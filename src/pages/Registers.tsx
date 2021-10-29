import { useEffect, useState } from "react";
import { ListBasic, BoxHired } from "../components";
import { DashboardContainer } from "../containers/Dashboard";
import { HiredController } from "../controllers";
import { IHired } from "../types";

export default function Registers() {
  const [hireds, setHireds] = useState<IHired[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const hiredsDb: any = await HiredController.findAll();
      setHireds(hiredsDb.data);
    };
    fetch();
  }, []);

  return (
    <DashboardContainer>
      <ListBasic
        perPage={10}
        initialPage={1}
        items={hireds}
        columns={["Nome", "Status"]}
        componentItem={<BoxHired onClickRow={hired => {
            console.log(hired.id)
        }}></BoxHired>}
      />
    </DashboardContainer>
  );
}
