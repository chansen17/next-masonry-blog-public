import { useState } from 'react';
import { Box, Heading, Text, HStack, Button } from "@chakra-ui/react"
import { useColorMode } from '@chakra-ui/color-mode'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import { FaTwitter, FaEnvelope } from 'react-icons/fa';
import { contact } from "../templateData";

const ContactCard = () => {
    const [email] = useState(contact.email);
    const [copied, setCopied] = useState(null);

    const { colorMode } = useColorMode()
    return (
        <Box bg={colorMode === 'light' ? "gray.700" : "gray.900"} w="100%" p={4} color={colorMode === 'light' ? "#fff" : "#ccc"}>
            <Heading fontSize="xl" bgGradient={colorMode === 'light' ? "linear(to-r, green.100, #928DAB)" : "linear(to-r, green.100, purple.700)"} bgClip="text">
                {contact.heading}
            </Heading>
            <HStack mt="4">
                <Button _hover={{ bg: colorMode === 'light' ? '#928DAB' : "green.100", color: colorMode === 'light' ? null : "#111"}} variant="outline" leftIcon={<FaTwitter/>}>
                    <a target="_blank" rel="noreferrer" href={contact.twitter}>Twitter</a>
                </Button>
                

                <CopyToClipboard text={email}
                onCopy={() => setCopied(!copied)}>
                <Button _hover={{ bg: colorMode === 'light' ? '#928DAB' : "green.100", color: colorMode === 'light' ? null : "#111"}} variant="outline" leftIcon={<FaEnvelope/>}>
                    Drop a line
                </Button>
                </CopyToClipboard>
                <Box mt="2">
                    {copied ? <Text 
                color="green.100">Email copied</Text> : null}
                </Box>
            </HStack>
         </Box>
    )
}

export default ContactCard
