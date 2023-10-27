import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import AboutMe from "./homepage/aboutMe";
import Bio from "./homepage/bio";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
