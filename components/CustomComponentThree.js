import { useColorMode } from '@chakra-ui/color-mode'
import { Heading, Box, Text} from "@chakra-ui/layout"

import { customThree } from '../templateData'

const CustomComponentThree = () => {
    const { colorMode } = useColorMode()
    return (
        <Box p="4" bg={colorMode === 'light' ? 'gray.800' : 'gray.900'} color="#fff">
            <Heading bgGradient={colorMode === 'light' ? "linear(to-r, green.100, #928DAB)" : "linear(to-r, green.100, purple.700)"} bgClip="text" fontSize="xl">
                {customThree.heading}
            </Heading>
            <Text>{customThree.body}</Text>
        </Box>
    )
}

export default CustomComponentThree
