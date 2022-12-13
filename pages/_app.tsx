import "../styles/globals.css";
import type { AppProps } from "next/app";
import Bio from "./bio/bio";
import Courses from "./courses";
import { Fragment } from "react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Bio />
      <Courses />
    </Fragment>
  );
}
