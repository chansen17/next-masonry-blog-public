import { useColorMode } from '@chakra-ui/color-mode'
import { Heading, Text, Box } from "@chakra-ui/layout"

import { customOne } from '../templateData'

const CustomComponentOne = () => {
    const { colorMode } = useColorMode()

    return (
        <Box p="4" bg={colorMode === 'light' ? 'gray.800' : 'gray.900'} color="#fff">
            <Heading bgGradient={colorMode === 'light' ? "linear(to-r, green.100, #928DAB)" : "linear(to-r, green.100, purple.700)"} bgClip="text" fontSize="xl">
                {customOne.heading}
            </Heading>
            <Text>{customOne.body}</Text>
        </Box>
    )
}

export default CustomComponentOne
