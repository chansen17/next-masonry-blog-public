// UI components
import { Stack, HStack, VStack, Heading, Box, Avatar, Text, Button, Flex} from "@chakra-ui/react"
import { useRouter } from 'next/router';
import { useColorMode } from '@chakra-ui/color-mode'
import { FaChevronLeft} from 'react-icons/fa';

import { headerData } from '../templateData';
import ThemeBtn from '../components/ThemeBtn';



const Header = () => {
    const router = useRouter();
    const { colorMode } = useColorMode()
    return (
        <Stack direction={{sm: "column", md: "row"}} mt="12" bg={colorMode === 'light' ? "gray.700" : "gray.900"} p="3" borderRadius="lg" alignItems="center" mb="2rem" color={colorMode === 'light' ? "#fff" : "#ccc"}>
            <Box>
                <Avatar borderRadius="full" boxSize="100px" objectFit="cover" src={headerData.avatarUrl} alt="Segun Adebayo" mr={{sm: null, md: 2, lg: 3}} />
            </Box>
            <Box>
                <Box textAlign={{sm: "center", md: "left"}}>
                    <Heading fontSize="2xl" color={colorMode === 'light' ? "green.100" : "rgba(255,255,255,.8)"}>
                     {router.pathname === '/' && `Hey, I'm ${headerData.name}`}
                     {router.pathname === '/blog' && `Welcome to my blog.`}
                     {router.pathname === '/projects' && `Welcome to my projects`}
                    </Heading>
                    <Text mt="1">
                    {router.pathname === '/' && `Hey, I'm ${headerData.caption}`}
                    </Text>
                </Box>
                <Box display={router.pathname === '/' ? "none" : null}>
                    <Button _hover={{bg: null}} bg={colorMode === 'light' ? 'gray.700' : 'gray.800'} color={colorMode === 'light' ? 'green.100' : 'green.100'} onClick={() => router.push('/')} mt="2" size="sm" leftIcon={<FaChevronLeft/>}>Go Back</Button>
                </Box>
            </Box>
            <ThemeBtn/>
        </Stack>
    )
}

export default Header



// <Flex>
//   <Avatar src="https://bit.ly/sage-adebayo" />
//   <Box ml="3">
//     <Text fontWeight="bold">
//       Segun Adebayo
//       <Badge ml="1" colorScheme="green">
//         New
//       </Badge>
//     </Text>
//     <Text fontSize="sm">UI Engineer</Text>
//   </Box>
// </Flex>