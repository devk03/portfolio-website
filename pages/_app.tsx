import "../styles/globals.css";
import type { AppProps } from "next/app";
import Courses from "./homepage/courses";
import { Fragment } from "react";
import AboutMe from "./homepage/aboutMe";
import Bio from "./homepage/bio";
import Blog from "./homepage/blog";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Dev Kunjadia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="z-10 text-xl md:text-2xl py-4 bg-zinc-900 text-center text-white sticky top-0">
        <nav className="flex flex-wrap justify-center px-2">
          <a href="#contact" className="px-2 py-1">
            Contact
          </a>
          <a href="#bio" className="px-2 py-1">
            About Me
          </a>
        </nav>
      </header>
      <div className="snap-y snap-mandatory h-screen min-w-full overflow-auto">
        <div className="snap-start flex items-center justify-center min-h-screen min-w-full bg-sky-100">
          <a id="contact">
            <AboutMe />
          </a>
        </div>
        <div className="snap-start flex items-center justify-center min-h-screen min-w-full bg-sky-200">
          <a id="bio">
            <Bio />
          </a>
        </div>
      </div>
    </Fragment>
  );
}
