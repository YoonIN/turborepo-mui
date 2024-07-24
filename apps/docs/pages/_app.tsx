"use client";
import { AppProps } from "next/app";
import Head from "next/head";

import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";

export default function CustomApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>콰트 스토어 어드민</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}
