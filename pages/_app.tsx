import "../styles/globals.css";
import type { AppProps } from "next/app";
import Courses from "./courses";
import { Fragment } from "react";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Bio from "./bio";
import Instagram from "./socialMedia/instagram";
export default function App({ Component, pageProps }: AppProps) {
  <script src="https://cdn.tailwindcss.com"></script>
  return (
    <Fragment>
      <title>Dev Kunjadia</title>
      <header className="text-2xl py-4 bg-zinc-900 text-center text-white sticky top-0">
        <a href="#bio" className="px-5">
          About Me
        </a>
        <a href="#contact" className="px-5">
          Contact
        </a>
        <a href="#projects" className="px-5">
          Projects
        </a>
        <a href="#contact" className="px-5">
          Courses
        </a>
      </header>
      <div className="snap-y snap-mandatory">
        <div className="snap-always snap-center h-screen w-screen bg-sky-200">
            <AboutMe />
        </div>
        <div className="snap-always snap-center h-screen w-screen bg-sky-300">
          <a id="bio">
            <Bio />
          </a>
        </div>
        <div className="snap-always snap-center h-screen w-screen bg-sky-400">
          <a id="projects">
            <object>
              <Projects/>
            </object>
          </a>
        </div>
      </div>
    </Fragment>
  );
}
