# Manga Rosa Frontend

Um projeto de gerenciamento de contratados feito em REACT, usando a biblioteca chakra-ui e tendo como linguagem base o typescript

# Guia de Instalação

Para iniciar o projeto, você precisa utilizar a api `manga-rosa-backend` que vai servir para alimentar este projeto. Você encontra está api clicando [aqui](https://github.com/KaduGhost/manga-rosa-backend)

Após seguir as instruções de instalação da api, utilize o seguinte comando para clonar este repositório:

```sh
git clone https://github.com/KaduGhost/manga-rosa-frontend
```
Utilize o seguinte comando para ir até a pasta do repositório

```sh
cd manga-rosa-frontend
```

Utilize o seguinte comando para instalar as dependências desta aplicação:

```sh
npm install
```
Após a instalação das dependências utilize o comando a seguir para iniciar a aplicação:

```sh
npm start
```

# Guia de utilização

Este projeto possui 3 rotas utilizaveis, veja a descrição delas abaixo.

| Rota                             | Descrição                                    |
| -------------------------------- | -------------------------------------------- |
| `/NOMEDOCOLABORADOR/registrar`   | Está rota serve para se cadastrar um novo colaborador na empresa, onde tem `NOMEDOCOLABORADOR` utilize o nome do colaborador que ira ser cadastrado |
| `/registros`                     | Está rota serve para ver a lista de colaboradores cadastrados                                                                                       |
| `/NOMEDOCOLABORADOR/validar  `   | Está rota serve para ver as informações cadastrados do colaborador e para validar seu cadastro, onde tem `NOMEDOCOLABORADOR` utilize exatamente o nome do colaborador como foi cadastrado |

Na rota de validação existem 2 botões que serve para validar e não validar o cadastro