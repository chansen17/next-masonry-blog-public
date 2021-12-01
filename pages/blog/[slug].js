import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useColorMode } from '@chakra-ui/color-mode'
import {VStack, Container, Flex, Heading, Text, Button } from '@chakra-ui/react'
import ThemeBtn from '../../components/ThemeBtn';

import { FaChevronLeft } from 'react-icons/fa';

let client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACESS_TOKEN,
});

export async function getStaticPaths() {
    let data = await client.getEntries({
        content_type: 'blogPost',
    });

    return {
        paths: data.items.map((item) => ({
            params: { slug: item.fields.slug},
        })),
        fallback: true,
    }
}

export async function getStaticProps({params}) {
    let data = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug
    });

    return {
        props: {
            post: data.items[0]
        },
        revalidate: 1,
    }
}

const SinglePost = ({post}) => {
    const { colorMode } = useColorMode()
    const router = useRouter();

    if(!post) {
        return <h3>Loading..</h3>
    }
    return (
        <>
        <Head>
            <title>Blog | {post.fields.blogTitle}</title>
        </Head>
        <VStack minHeight="100vh" bgGradient={colorMode === 'light' ? "linear(to-r, #1F1C2C, #928DAB)" : "linear(to-r, #0F2027, #203A43, #24243e)"}>
            <Container maxW="960" mt="12" color={colorMode === 'light' ? '#FFF' : '#eee'}>
                <ThemeBtn/>

                <Button _hover={{bg: null}} bg={colorMode === 'light' ? 'gray.700' : 'gray.800'} color={colorMode === 'light' ? 'green.100' : 'green.100'} onClick={() => router.push('/blog')} mb="2" size="sm" leftIcon={<FaChevronLeft/>}>Go Back</Button>

                <Flex flexDirection="column" justifyContent="center">
                    <Image placeholder="blur" blurDataURL="https://via.placeholder.com/150" src={post.fields.blogPostImage.fields.file.url && 'https:' + post.fields.blogPostImage.fields.file.url} layout="intrinsic" width="960" height="500" alt={`Image banner for ${post.fields.blogTitle} post`} objectFit="cover" />
                    <Heading my="4" fontSize="2rem">{post.fields.blogTitle}</Heading>

                    <Text as="span" fontSize="1.25rem">{post.fields.blogContent && documentToReactComponents(post.fields.blogContent)}</Text>

                </Flex>
            </Container>
        </VStack>
        </>
    )
}

export default SinglePost;