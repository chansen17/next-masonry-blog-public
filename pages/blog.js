import Link from 'next/link';
import Head from 'next/head'
import { VStack, Container, Text } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode'
import Masonry from 'react-masonry-css'

import Header from '../components/Header'
import Post from '../components/Post';


let client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID, // 👈🏼  Create your .env.local file. Contentful SpaceID
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACESS_TOKEN,// 👈🏼  Create your .env.local file. Contenful AccessToken
  });

    export async function getStaticProps() {
    let data = await client.getEntries({
        content_type: 'blogPost' // 👈🏼 IMPORTANT. Based on blog. This id is base on the same way I set up my contentful content model
    })

    return {
          props: {
            posts: data.items
        },
        revalidate: 1,
    }
  }

// this defines your columns responsive breakpoints.
const breakpointColumnsObj = {
    default: 3,
    800: 2,
    600: 1
  };

const BlogPage = ({posts}) => {
    const { colorMode } = useColorMode()
    const postsArr = posts.map(post => (
        <Post
            key={post.sys.id}
            title={post.fields.blogTitle && post.fields.blogTitle}
            excerpt={post.fields.blogExcerpt && post.fields.blogExcerpt}
            featured={post.fields.featuredBlogPost && post.fields.featuredBlogPost}
            category={post.fields.category && post.fields.category}
            date={post.fields.date && post.fields.date}
            slug={post.fields.slug}
            img={'https:' + post.fields.blogPostImage.fields.file.url && post.fields.blogPostImage.fields.file.url}
        />
      ))

      // if(posts.length < 1) {
      //   return <span>Whoops, no posts yet.</span>
      // }

    return (
        <VStack minHeight="100vh" bgGradient={colorMode === 'light' ? "linear(to-r,#1F1C2C, #928DAB)" : "linear(to-r, #0F2027, #203A43, #24243e)"}>
         <Head>
            <title>Blog</title>
         </Head>
        <Container maxW="960">
        <Header/>
        {posts.length < 1 ? <Text as="h2" color={colorMode === 'light' ? "#fff" : "#eee"}>Whoops, no posts yet.</Text> : null}
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
            {postsArr}
            </Masonry>   
        </Container>
        </VStack>
    )
}

export default BlogPage
