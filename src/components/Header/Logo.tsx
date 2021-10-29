import { Box, Image } from "@chakra-ui/react"

export default function Logo(){

    return(
        <Box as="button">
            <Image alt="Logo" src="/logo.png" w="200px"/>
        </Box>
    )
}