import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme';
import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <NextNProgress height={3} color="#928DAB" />
      <Component {...pageProps} theme={theme}/>
    </ChakraProvider>
  )
}

export default MyApp
