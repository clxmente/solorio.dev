import "../styles/globals.css";
import type { AppProps } from "next/app";

import Nav from "../components/navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-4xl space-y-8 py-10 px-5 sm:px-0">
      <Head>
        <title>Clemente Solorio</title>
        <meta
          name="description"
          content="Hello, I'm Clemente Solorio. I'm a full-stack web developer and a student at California State University, Fullerton."
        />
        <meta
          name="keywords"
          content="Clemente Solorio, Clemente, Solorio, clxmente, github, developer, csuf, clem"
        />
        <link rel="icon" href="https://github.com/clxmente.png" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
