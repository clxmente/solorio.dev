import "../styles/globals.css";
import type { AppProps } from "next/app";

import Nav from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-4xl py-10 px-5">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
