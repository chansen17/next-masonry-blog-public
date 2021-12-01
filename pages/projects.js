import Link from 'next/link';
import Head from 'next/head'
import { VStack, Container } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode'
import Masonry from 'react-masonry-css'

import Header from '../components/Header'
import Project from '../components/Project';

let client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID, // 👈🏼 Create your .env.local file. Contentful SpaceID
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACESS_TOKEN, // 👈🏼 Create your .env.local file. Contentful Acess Token
  });

    export async function getStaticProps() {
    let data = await client.getEntries({
        content_type: 'project' // 👈🏼 IMPORTANT. Based on blog. This id is base on the same way I set up my contentful content model
    })

    return {
          props: {
            projects: data.items
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

const ProjectsPage = ({projects}) => {
    const { colorMode } = useColorMode()
    const projectsArr = projects.map(project => (
        <Project
            key={project.sys.id && project.sys.id}
            title={project.fields.projectName && project.fields.projectName}
            excerpt={project.fields.projectExcerpt && project.fields.projectExcerpt}
            description={project.fields.projectDescription && project.fields.projectDescription}
            featured={project.fields.featuredProject && project.fields.featuredProject}
            category={project.fields.category && project.fields.category}
            liveUrl={project.fields.projectLink && project.fields.projectLink}
            repoUrl={project.fields.projectRepo && project.fields.projectRepo}
            img={'https:' + project.fields.projectImage.fields.file.url && project.fields.projectImage.fields.file.url}
        />
      ))

    return (
        <VStack minHeight="100vh" bgGradient={colorMode === 'light' ? "linear(to-r,#1F1C2C, #928DAB)" : "linear(to-r, #0F2027, #203A43, #24243e)"}>
         <Head>
            <title>Projects</title>
         </Head>
        <Container maxW="960">
        <Header/>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
            {projectsArr}
            </Masonry>   
        </Container>
        </VStack>
    )
}

export default ProjectsPage
