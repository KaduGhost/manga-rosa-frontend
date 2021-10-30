import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DashboardContainer } from "../containers/Dashboard";
import { HiredController } from "../controllers";
import { IHired } from "../types";
import { Text, Spinner } from '@chakra-ui/react';

export default function Validar() {

    const [hired, setHired] = useState<IHired>(Object);

    const params: any = useParams();

    useEffect(() => {
        const fetch = async () => {
            const hiredDb: any = await HiredController.findByName(params.slug)
            setHired(hiredDb.data);
        }
        fetch();
    }, [])

    return (
        <DashboardContainer>
            {hired ? <Text>{hired.name} oi</Text> : <Spinner/>}
        </DashboardContainer>
    )
}