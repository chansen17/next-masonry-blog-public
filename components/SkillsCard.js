import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Stack, Heading, Text, Flex, Center,Badge } from "@chakra-ui/react"

import { skillsBasic, skillsAdvanced } from '../templateData';

const SkillsCard = () => {
    const { colorMode } = useColorMode()
    return (
        <Box bg={colorMode === 'light' ? "gray.700" : "gray.900"}  w="100%" p={4} color={colorMode === 'light' ? "#fff" : "#ccc"}>
            <Heading fontSize="xl" mb="2" bgGradient={colorMode === 'light' ? "linear(to-r, green.100, #928DAB)" : "linear(to-r, green.100, purple.400)"} bgClip="text">My skills</Heading>
            <Text>
                Lorem ipsum do a aliquam velit?
            </Text>
            <Flex flexDirection="row" flexWrap="wrap" mt="4">
            {skillsBasic.map((skill, i) => (
                <Box key={i}>
                    <CircularProgress thickness="6px" value={skill.rating} color={colorMode === 'light' ? '#928DAB' : 'green.300'}>
                        <CircularProgressLabel fontSize=".55rem">{skill.name}</CircularProgressLabel>
                    </CircularProgress>
                </Box>
            ))}
            </Flex>
            <Flex flexDirection="row" flexWrap="wrap" mt="4">
            {skillsAdvanced.map((skill, i) => (
                <Box key={i}>
                    <Stack spacing={5}>
                        <Badge m="1">{skill.name}</Badge>
                    </Stack>
                </Box>
            ))}
            </Flex>
         </Box>
    )
}

export default SkillsCard
