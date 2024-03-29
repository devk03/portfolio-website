import type { AppProps } from "next/app";
import { Fragment } from "react";
import AboutMe from "./homepage/aboutMe";
import Bio from "./homepage/bio";
import Head from "next/head";
import { handleSignOut } from "../components/general/signOut";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase"; // Import your Firebase auth instance
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Subscribe to auth state changes
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const email = user.email;
        if (email === "dtkunjadia@gmail.com") {
          setIsAdmin(true);
        }
      }
    });
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Dev Kunjadia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="z-10 text-xl md:text-2xl py-4 bg-zinc-900 text-center text-white sticky top-0">
        <div className="flex flex-wrap justify-center px-2">
          <a href="#contact" className="px-2 py-1">
            Contact
          </a>
          <a href="#bio" className="px-2 py-1">
            About Me
          </a>
          <button
            className="px-2 py-1"
            type="button"
            onClick={() => router.push("/blog")}
          >
            Blog
          </button>
          {!isAdmin && ( // If the user is not logged in, render the Admin-Login button
            <button
              className="px-2 py-1"
              type="button"
              onClick={() => router.push("/login")}
            >
              Admin-Login
            </button>
          )}
          {isAdmin && ( // If the user is logged in, render the Admin-Login button
            <button className="px-2 py-1" type="button" onClick={()=>handleSignOut(auth, {isAdmin, setIsAdmin})}>
              Logout
            </button>
          )}
        </div>
      </header>
      <div className="snap-y snap-mandatory h-screen min-w-full overflow-auto">
        <div className="snap-start flex items-center justify-center min-h-screen min-w-full bg-sky-100">
          <div id="contact" className="mb-20">
            <AboutMe />
          </div>
        </div>
        <div className="snap-start flex items-center justify-center min-h-screen min-w-full bg-sky-200">
          <div id="bio">
            <Bio />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
