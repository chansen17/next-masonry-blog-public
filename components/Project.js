import { useColorMode } from '@chakra-ui/color-mode'
import { Badge, Box, Heading, Text, Image, ButtonGroup, Button   } from "@chakra-ui/react"
import { FaChevronRight } from 'react-icons/fa'


const Project = ({title, excerpt, featured, category, description, liveUrl, repoUrl, img}) => {
    const { colorMode } = useColorMode()
    return (
        <Box bg={colorMode === 'light' ? 'gray.700' : 'gray.900'} border="none" p="4" color="#fff" maxW="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
            {featured && (
                <Badge px="3" py="1" mb="2" bg={colorMode === 'light' ? '#928DAB' : 'gray.700'} color={colorMode === 'light' ? '#fff' : 'green.100'}>Featured</Badge>
            )}
            <Image src={img} alt="alt text" />
            <Heading mt="3" fontSize="xl">{title && title}</Heading>
            <Text mt="1" noOfLines={2} >{excerpt && excerpt}</Text>
            <Box>
            <ButtonGroup mt="3" variant="outline">
                <Button rightIcon={<FaChevronRight/>} _hover={{ bg: colorMode === 'light' ? '#928DAB' : "green.100", color: colorMode === 'light' ? null : "#111"}} size="sm">
                    <a target="_blank" rel="noreferrer" href={liveUrl && liveUrl}>Visit Project</a>
                </Button>
                <Button rightIcon={<FaChevronRight/>} _hover={{ bg: colorMode === 'light' ? '#928DAB' : "green.100", color: colorMode === 'light' ? null : "#111"}} size="sm">
                    <a target="_blank" rel="noreferrer" href={repoUrl && repoUrl}>See Repo</a>
                </Button>
            </ButtonGroup>
            </Box>
            <Text color={colorMode === 'light' ? '#928DAB' : 'green.100'} mt="2" p="1" fontSize=".75rem" variant="solid">{category && [...category]}</Text>
        </Box> 
    )
}

export default Project