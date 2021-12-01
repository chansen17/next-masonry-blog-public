import { useColorMode } from '@chakra-ui/color-mode'
import { Box,Heading, Text, HStack, Button, IconButton } from "@chakra-ui/react"
import { FaTwitter,FaGithub,FaLinkedinIn } from 'react-icons/fa';

import { bio, socials } from '../templateData';

const BioCard = () => {
    const { colorMode } = useColorMode()
    return (
        <Box bg={colorMode === 'light' ? "gray.800" : "gray.900"} p="4" color={colorMode === 'light' ? "#fff" : "#ccc"}>
            <Heading bgGradient={colorMode === 'light' ? "linear(to-r, green.100, #928DAB)" : "linear(to-r, green.100, purple.700)"} bgClip="text" fontSize="xl" mb="2">
                {bio.heading}
            </Heading>
            <Text fontSize="lg">
                {bio.body}
            </Text>
            <HStack mt="3">
                <IconButton as="a" target="_blank" rel="noreferrer" href={socials.twitter} _hover={{ bg: colorMode === 'light' ? '#928DAB' : "green.100", color: colorMode === 'light' ? null : "#111"}} bg={colorMode === 'light' ? "gray.700" : "gray.700"}><FaTwitter/></IconButton>
                <IconButton as="a" target="_blank" rel="noreferrer" href={socials.github} _hover={{ bg: colorMode === 'light' ? '#928DAB' : "green.100", color: colorMode === 'light' ? null : "#111"}} bg={colorMode === 'light' ? "gray.700" : "gray.700"}><FaGithub/></IconButton>
                <IconButton as="a" target="_blank" rel="noreferrer" href={socials.linkedIn} _hover={{ bg: colorMode === 'light' ? '#928DAB' : "green.100", color: colorMode === 'light' ? null : "#111"}} bg={colorMode === 'light' ? "gray.700" : "gray.700"}><FaLinkedinIn/></IconButton>
            </HStack>
         </Box>
    )
}

export default BioCard
