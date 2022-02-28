import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import NProgress from 'nprogress';
import splitbee from '@splitbee/web';

import { theme } from '../theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import '../styles/globals.css'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const inIframe = () => window.location !== window.parent.location;

function App({ Component, pageProps, router }: AppProps) {
  
  useEffect(() => {
    // Do not initialize splitbee for iframe previews
    if (!inIframe()) {
      splitbee.init();
    }

  }, []);

  return (
    <ChakraProvider theme={theme}>
      <ThemeEditorProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </ThemeEditorProvider>
    </ChakraProvider>
  );
}

export default App;
