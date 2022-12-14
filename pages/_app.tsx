import "../styles/globals.css";
import type { AppProps } from "next/app";
import Bio from "./bio/bio";
import Courses from "./courses";
import { Fragment } from "react";
import AboutMe from "./aboutMe";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <title>Dev Kunjadia</title>
      <Bio />
      <AboutMe />
      <Courses />
    </Fragment>
  );
}
