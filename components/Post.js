import Link from 'next/link';
import { useColorMode } from '@chakra-ui/color-mode'
import { Badge, Box, Heading, Text, Image, Button } from "@chakra-ui/react"

const Post = ({title, excerpt, featured, category, date, slug, img}) => {
    const { colorMode } = useColorMode()
    return (
        <Box bg={colorMode === 'light' ? 'gray.700' : 'gray.900'} border="none" p="4" color="#fff" maxW="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box display="flex" alignItems="center" justifyContent="space-between">
                {featured && (
                    <Badge variant="outline" px="3" py="1" mb="2" bg={colorMode === 'light' ? 'green.100' : 'gray.700'} color={colorMode === 'light' ? 'gray.900' : 'green.100'}>Featured</Badge>
                )}
                {date && (
                    <Text py="1" mb="2" fontSize="xs">{date && date}</Text>
                )}
            </Box>
            <Image src={img && img} alt="alt text" />
            <Heading mt="3" fontSize="xl">{title && title}</Heading>
            <Text mt="1" noOfLines={2}>{excerpt && excerpt}</Text>
            <Box mt="3">
            <Button _hover={{ bg: colorMode === 'light' ? '#928DAB' : "green.100", color: colorMode === 'light' ? "#fff" : "#111"}} variant="outline" size="sm" color={colorMode === 'light' ? '#928DAB' : 'green.100'}>
                {slug && (
                <Link href={`/blog/${slug}`}>
                    <a>Read post</a>
                </Link>
                )}
            </Button>
            </Box>
            <Text color={colorMode === 'light' ? '#928DAB' : 'green.100'} mt="2" p="1" fontSize=".75rem" variant="solid">{category && [...category]}</Text>
        </Box> 
    )
}

export default Post