import "../styles/globals.css";
import type { AppProps } from "next/app";
import Bio from "./bio/bio";
import { Fragment } from "react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Bio />
{/* <Component {...pageProps} /> */}
    </Fragment>
  );
}
