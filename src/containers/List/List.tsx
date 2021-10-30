import { Flex, Stack, Text, Button, FlexProps } from "@chakra-ui/react";

interface IList extends FlexProps {
    pages: number;
    onChangePage: (page: number) => void;
    page: number
}

export default function List({pages, onChangePage, page, ...res}:IList) {

    //Função para alterar a página da lista
    const changePage = (id: string) => {
        let newPage = page;
        if (id === "next") newPage++
        else if (id === "back") newPage--
        else if (id === "first") newPage = 1
        onChangePage(newPage);
    }

    return (
        <Flex direction="column" alignItems="center">
            <Flex w="100%" p={4} direction="row" maxHeight="100vh">
                <Stack w="100%" bg="gray.200" p={4} spacing={1}>
                    {res.children}
                </Stack>
            </Flex>
            <Flex direction="column" mb={4}>
                <Flex p={2} alignItems="center" justifyContent="center"><Text>Página: {page}</Text></Flex>
                <Stack spacing={2} direction="row">
                    {(page !== 1) && <Button colorScheme="back" onClick={() => {
                        changePage('back')
                    }}>Página anterior</Button>}
                    {(pages > 1 && page !== pages) && <Button colorScheme="back" onClick={() => {
                        changePage('next')
                    }}>Próxima página</Button>}
                </Stack>
            </Flex>
        </Flex>
    )
}