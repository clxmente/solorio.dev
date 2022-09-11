import "../styles/globals.css";
import type { AppProps } from "next/app";

import { AnimatePresence, motion } from "framer-motion";

import Nav from "../components/navbar";
import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    // thanks alii (and phineas for the pop sound)
    if (typeof window === "undefined") return;
    void new Audio("/pop.mp3").play().catch(() => null);
  }, [router.pathname]);

  return (
    <div className="mx-auto max-w-4xl space-y-8 py-10 px-5 sm:px-0">
      <Head>
        <title>Clemente Solorio</title>
        <meta
          name="description"
          content="Hello, I'm Clemente Solorio. I'm a fullstack web developer and a student at California State University, Fullerton."
        />
        <meta
          name="keywords"
          content="Clemente Solorio, Clemente, Solorio, clxmente, github, developer, csuf, clem"
        />
        <link rel="icon" href="https://github.com/clxmente.png" />
      </Head>

      <Nav />

      <AnimatePresence>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ y: 10, opacity: 0 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
