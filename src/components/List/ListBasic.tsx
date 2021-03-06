import { SimpleGrid, Stack, FormLabel, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CustomBarEmpty, InputSearch } from "..";
import { ListContainer } from "../../containers/List";

interface IListBasic {
  perPage: number;
  initialPage: number;
  items: Object[];
  columns: string[];
  componentItem: any;
  filter?: (object: any) => boolean;
  orderBy?: (a: any, b: any) => number;
  onClickSearch?: (input: string) => (object: any) => boolean;
}

export default function ListBasic({
  orderBy,
  perPage,
  initialPage,
  items,
  columns,
  componentItem,
  filter,
  onClickSearch,
}: IListBasic) {
  const [inputSearch, setInputSearch] = useState<string>("");

  const [pages, setPages] = useState<number>(1);
  const [page, setPage] = useState<number>(initialPage);

  //Filtrar os items caso tenha um filtro no componente
  const itemsFiltered = filter ? items.filter(filter) : items;
  //Ordenar os items caso tenha uma função de odernação no componente
  const itemsOrdered = orderBy ? itemsFiltered.sort(orderBy) : itemsFiltered;
  //Filtrar os items pelo que esta escrito na barra de pesquisa
  const itemsSearched = onClickSearch
    ? itemsOrdered.filter((object) => {
        return onClickSearch(inputSearch)(object);
      })
    : itemsOrdered;

  //Função para buscar as linhs que vão aparecer na lista
  const getRowsByPage = (page: number) => {
    const rows = itemsSearched.slice(perPage * (page - 1), perPage * page);
    return rows;
  };

  useEffect(() => {
    setPages(Math.ceil(itemsSearched.length / perPage));
  }, []);

  return (
    <>
      <CustomBarEmpty>
        <Stack direction="row" spacing={10} w="100%">
          <InputSearch onClickSearch={(input) => setInputSearch(input)} />
        </Stack>
      </CustomBarEmpty>
      <ListContainer pages={pages} onChangePage={setPage} page={page}>
        <Flex
          borderRadius={4}
          direction="row"
          justifyContent="space-between"
          bg="white"
          color="black"
          w="100%"
          paddingStart={2}
          paddingTop={1}
        >
          {columns.map((columnName, index) => {
            return (
              <FormLabel
                key={index}
                w={Math.abs(100 / columns.length).toString() + "%"}
              >
                {columnName}
              </FormLabel>
            );
          })}
        </Flex>
        <SimpleGrid alignItems="center" mt="2" spacing={1} direction="row">
          {getRowsByPage(page).map((item: any) => {
            let newComponent = {
              ...componentItem,
              key: item._id,
              props: {
                ...componentItem.props,
                item: item,
              },
            };
            return newComponent;
          })}
        </SimpleGrid>
      </ListContainer>
    </>
  );
}
