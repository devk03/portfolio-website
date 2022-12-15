import "../styles/globals.css";
import type { AppProps } from "next/app";
import Bio from "./bio/bio";
import Courses from "./courses";
import { Fragment } from "react";
import AboutMe from "./aboutMe";
import Projects from "./projects";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <title>Dev Kunjadia</title>
      <Bio />
      <AboutMe />
      <Projects />
      <Courses />
    </Fragment>
  );
}
