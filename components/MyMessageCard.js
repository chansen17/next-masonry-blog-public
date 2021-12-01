import { useColorMode } from '@chakra-ui/color-mode'
import { Box } from "@chakra-ui/react"
import { Heading, Text } from "@chakra-ui/react"

import { message } from '../templateData'

const MyMessageCard = () => {
    const { colorMode } = useColorMode()
    return (
        <Box bg={colorMode === 'light' ? "gray.800" : "gray.900"} w="100%" p={4} color={colorMode === 'light' ? "#fff" : "#ccc"}>
            <Heading fontSize="xl" mb="2" bgGradient={colorMode === 'light' ? "linear(to-r, green.100, #928DAB)" : "linear(to-r, green.100, purple.700)"} bgClip="text">
                {message.heading}
            </Heading>
            <Text>
                {message.body}
            </Text>
         </Box>
    )
}

export default MyMessageCard
