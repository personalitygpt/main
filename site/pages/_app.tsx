import { Fragment, useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "./global.css";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const muiTheme = createTheme();
  const chakraTheme = extendTheme({
    styles: { global: { img: { maxWidth: "unset" } } },
    colors: {
      gray: {
        50: "#f7fafc",
        100: "#edf2f7",
        200: "#e2e8f0",
        300: "#cbd5e0",
        400: "#a0aec0",
        500: "#718096",
        600: "#4a5568",
        700: "#2c3748",
        800: "#1a202c",
        900: "#171923",
      },
      personalitygpt: {
        50: "#e9f1fb",
        100: "#bed6f4",
        200: "#93baec",
        300: "#679fe4",
        400: "#3c84dd",
        500: "#2676d9",
        600: "#226ac3",
        700: "#1b5398",
        800: "#133b6c",
        900: "#0b2341",
      },
    },
  });
  const emotionCache = createCache({
    key: "emotion-cache",
    prepend: true,
  });

  return (
    <Fragment>
      <Head>
        <title>PGPT</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <CacheProvider value={emotionCache}>
          <ChakraProvider theme={chakraTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ChakraProvider>
        </CacheProvider>
      </ThemeProvider>
    </Fragment>
  );
}
