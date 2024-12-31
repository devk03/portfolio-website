import type { NextPage } from 'next';
import Head from "next/head";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing particles");
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded");
  }, []);

  return (
    <>
      <Head>
        <title>Dev Kunjadia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <main className="min-h-screen flex flex-col justify-center items-center px-6 relative bg-black">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: false,
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: ["#60A5FA", "#34D399", "#FFFFFF"],
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                direction: "none",
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
                trail: {
                  enable: true,
                  length: 3,
                  fillColor: "#000000",
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 100,
                },
                value: 10,
              },
              opacity: {
                value: 1,
                animation: {
                  enable: true,
                  speed: 0.3,
                  minimumValue: 0.3,
                  sync: true
                }
              },
              blur: {
                enable: true,
                strength: 2
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 4 },
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 1,
                  sync: false
                }
              },
            },
            detectRetina: true,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab"
                },
              },
              modes: {
                grab: {
                  distance: 200,
                  links: {
                    opacity: 0.5
                  }
                }
              }
            },
          }}
          className="absolute inset-0 w-full h-full"
        />

        <div className="absolute inset-0 backdrop-blur-[4px] bg-black/30" />

        <div className={`transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative z-10`}>
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 tracking-tight relative leading-normal py-2 font-inter before:absolute before:content-['Dev_Kunjadia'] before:inset-0 before:text-black before:blur-[30px] before:-z-10 before:opacity-50">
              Dev Kunjadia
            </h1>

            <div className="text-xl sm:text-2xl text-center text-zinc-300 font-light tracking-wider font-inter">
              engineer - athlete - writer
            </div>

            <div className="flex justify-center items-center space-x-8 pt-4">
              <a href="https://github.com/devk03"
                className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-zinc-300 hover:text-white">
                <svg
                  className="w-[50px] h-[50px] opacity-70 hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.167 8.84 21.49C9.34 21.581 9.52 21.272 9.52 21.007C9.52 20.719 9.512 19.763 9.512 19.763C7 20.369 6.32 18.976 6.32 18.976C5.78 17.661 5.06 17.352 5.06 17.352C4.12 16.619 5.13 16.619 5.13 16.619C6.18 16.681 6.792 17.784 6.792 17.784C7.72 19.37 9.282 19.037 9.52 18.772C9.58 18.085 9.85 17.597 10.12 17.352C7.78 17.107 5.32 16.063 5.32 11.717C5.32 10.402 5.81 9.334 6.62 8.513C6.56 8.248 6.13 7.027 6.72 5.474C6.72 5.474 7.78 5.178 9.52 6.398C10.32 6.163 11.12 6.04 11.92 6.04C12.72 6.04 13.52 6.163 14.32 6.398C16.06 5.178 17.12 5.474 17.12 5.474C17.71 7.027 17.28 8.248 17.22 8.513C18.03 9.334 18.52 10.402 18.52 11.717C18.52 16.063 16.06 17.107 13.72 17.352C14.05 17.659 14.32 18.197 14.32 19.092C14.32 20.37 14.312 20.657 14.312 21.007C14.312 21.272 14.492 21.581 14.992 21.49C18.967 20.167 21.832 16.419 21.832 12C21.832 6.477 17.355 2 11.832 2H12Z" />
                </svg>
              </a>
              <a href="mailto:devk@umich.edu"
                className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-zinc-300 hover:text-white">
                <svg
                  className="w-[50px] h-[50px] opacity-70 hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/dev-kunjadia/"
                className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-zinc-300 hover:text-white">
                <svg
                  className="w-[50px] h-[50px] opacity-70 hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM18.5 18.5V13.2C18.5 11.5 17.1 10.1 15.4 10.1C14.5 10.1 13.4 10.6 12.8 11.4V10.3H10.3V18.5H12.8V13.6C12.8 12.8 13.4 12.2 14.2 12.2C15 12.2 15.6 12.8 15.6 13.6V18.5H18.5ZM6.9 8.2C7.8 8.2 8.5 7.5 8.5 6.6C8.5 5.7 7.8 5 6.9 5C6 5 5.3 5.7 5.3 6.6C5.3 7.5 6 8.2 6.9 8.2ZM8.2 18.5V10.3H5.7V18.5H8.2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 text-sm text-emerald-400 font-inter z-10 flex items-center gap-2">
          Status: Up
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
