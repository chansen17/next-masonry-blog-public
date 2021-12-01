import { useRouter } from 'next/router';
import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Heading, Button } from "@chakra-ui/react"
import { FaChevronRight } from 'react-icons/fa';

const ProjectsBtnCard = () => {
    const router = useRouter();
    const { colorMode } = useColorMode()
    return (
        <Box bg={colorMode === 'light' ? "gray.700" : "gray.900"}  w="100%" p={4} color={colorMode === 'light' ? "#fff" : "#ccc"}>
            <Heading fontSize="xl" bgGradient={colorMode === 'light' ? "linear(to-r, green.100, #928DAB)" : "linear(to-r, green.100, purple.700)"} bgClip="text">My Projects</Heading>
            <Button onClick={() => router.push('/projects')} _hover={{ bg: colorMode === 'light' ? '#928DAB' : "green.100", color: colorMode === 'light' ? null : "#111"}} variant="outline" rightIcon={<FaChevronRight/>} mt="4">See work</Button>
         </Box>
    )
}

export default ProjectsBtnCard
