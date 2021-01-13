import * as React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../scripts/wdyr';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;

// import React, { ContextType, createContext } from 'react';
// import App, { AppProps } from 'next/app';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Head from 'next/head';
// import { AppContextType, AppInitialProps } from 'next/dist/next-server/lib/utils';
// import { Router } from 'next/router';
// // import { StateInspector } from 'reinspect';
// // import { ThemeProvider } from '@material-ui/core/styles';

// const DEFAULT_API_BASE_URL = 'http://35.190.81.103';

// type PageContextValue = { apiBaseUrl: string };
// const PageContext = createContext<Partial<PageContextValue>>({});

// function Sword({ Component, pageProps }: AppProps<AppInitialProps & PageContextValue>) {
//   const { apiBaseUrl } = pageProps;
//   React.useEffect(() => {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector('#jss-server-side');
//     jssStyles?.parentElement?.removeChild(jssStyles);
//   }, []);
//   return (
//     <>
//       <Head>
//         <meta
//           name="viewport"
//           content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
//         />
//       </Head>
//       <PageContext.Provider value={{ apiBaseUrl }}>
//         {/* <StateInspector name="App"> */}
//         {/* <ThemeProvider theme={theme}> */}
//         {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//         <CssBaseline />
//         <Component {...pageProps} />
//         {/* </ThemeProvider> */}
//         {/* </StateInspector> */}
//       </PageContext.Provider>
//     </>
//   );
// }

// Sword.getInitialProps = async (appContext: AppContextType<Router>): Promise<AppInitialProps & PageContextValue> => {
//   const pageProps = App.getInitialProps(appContext);
//   const apiBaseUrl = process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL;
//   const ret: AppInitialProps & PageContextValue = { ...pageProps, apiBaseUrl };
//   return ret;
// };

// export default Sword;
