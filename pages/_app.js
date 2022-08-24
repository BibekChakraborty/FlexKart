import "../styles/globals.css";
import Head from "next/head";

import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <script
          src="https://kit.fontawesome.com/97cafe4b3f.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
