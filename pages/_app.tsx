import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import {SessionProvider} from 'next-auth/react';
import type {AppProps} from 'next/app';
import {breakpoints, styles, textStyles} from '../styles/theme';

const theme = extendTheme({styles, breakpoints, textStyles});

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
