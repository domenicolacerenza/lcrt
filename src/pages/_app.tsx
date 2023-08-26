import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>LCRT</title>
      </Head>
      <meta name="application-name" content="LCRT XYZ" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="LCRT XYZ" />
      <meta name="description" content="Nico Lacerenza - Visual Sound Artist" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#069072 " />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

      <link rel="apple-touch-icon" href="/howl.png" />
      
      <link rel="icon" type="image/png" sizes="any" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="LCRT XYZ" />
      <meta property="og:description" content="Nico Lacerenza - Visual Sound Artist" />
      <meta property="og:site_name" content="LCRT XYZ" />
      <meta property="og:url" content="https://www.lcrt.xyz" />
      <meta property="og:image" content="https://www.lcrt.xyz/favicon.ico" />
      <ContextProvider>
        <div className="flex flex-col h-screen w-full">
          <Notifications />
          <AppBar />
          <ContentContainer>
            <Component {...pageProps} />
            <Footer />
          </ContentContainer>
        </div>
      </ContextProvider>
    </>
  );
};

export default App;
