import { useRouter } from 'next/router';
import { useColorMode } from '@chakra-ui/color-mode'
import { Box, HStack, Heading, Button } from "@chakra-ui/react"

import { FaDev, FaPen } from 'react-icons/fa'
import { socials } from '../templateData';

const BlogBtnCard = () => {
    const router = useRouter();
    const { colorMode } = useColorMode()
    return (
        <Box bg={colorMode === 'light' ? "gray.700" : "gray.900"}  w="100%" p={4} color="white">
            <Heading fontSize="xl" bgGradient={colorMode === 'light' ? "linear(to-r, green.100, #928DAB)" : "linear(to-r, green.100, purple.700)"} bgClip="text">My Blogs</Heading>
            <HStack mt="4">
                <Button onClick={() => router.push('/blog')} _hover={{ bg: colorMode === 'light' ? '#928DAB' : "green.100", color: colorMode === 'light' ? null : "#111"}} variant="outline" leftIcon={<FaPen/>}>Personal</Button>
                <Button _hover={{ bg: colorMode === 'light' ? '#928DAB' : "green.100", color: colorMode === 'light' ? null : "#111"}} variant="outline" leftIcon={<FaDev/>}>
                    <a target="_blank" rel="noreferrer" href={socials.dev}>DEV</a>
                </Button>
            </HStack>
         </Box>
    )
}

export default BlogBtnCard
