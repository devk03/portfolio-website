import type { NextPage } from 'next';
import Head from "next/head";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import Link from 'next/link';

interface ProjectType {
  title: string;
  description: string;
  image?: string;
  githubLink?: string;
  liveLink?: string;
  technologies: string[];
}

interface ExperienceType {
  company: string;
  role: string;
  link: string;
  description: string[];
  image?: string;
}

interface EducationType {
  school: string;
  link: string;
  degree: string;
  description: string;
  image?: string;
}

interface CoolShitType {
  title: string;
  link?: string;
}

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

  const education: EducationType[] = [
    {
      school: "University of Michigan, Ann Arbor",
      link: "https://www.engin.umich.edu/",
      degree: "b.s.e. computer science",
      description: "coursework: data structures, algorithms, machine learning, \
                  operating systems, programming languages, computer security, \
                  distributed systems, computer organization, web systems, \
                  computer science theory, enumerative combinatorics, linear algebra, \
                  calculus 1-3, probability theory, statistics",
      image: "/education/umich.jpg"
    }
  ];

  const experience: ExperienceType[] = [
    {
      company: "Meta",
      role: "software engineering",
      link: "https://meta.com",
      description: [
        "soon..."
      ],
      image: "/employment/meta.png"
    },
    {
      company: "Milieu",
      role: "software engineering, product management, design",
      link: "https://milieubio.com",
      description: [
        "created core infra, payment/shipping integrations, designed web experience, serum selection algorithm"
      ],
      image: "/employment/milieu.png"
    },
    {
      company: "Capital One",
      role: "software engineering",
      link: "https://capitalone.com",
      description: [
        "worked on a distributed linter to enforce code quality amongst card tech"
      ],
      image: "/employment/capitalone.png"
    },
    {
      company: "Skyspecs",
      role: "software engineering",
      link: "https://skyspecs.com",
      description: [
        "optimized a massive renewable asset management platform and wrote a lot of react"
      ],
      image: "/employment/skyspecs.png"
    },
    {
      company: "Magna",
      role: "software engineering",
      link: "https://www.magna.com",
      description: [
        "wrote lots of c++ to optimize component communication in vehicle dashboards"
      ],
      image: "/employment/magna.png"
    },
    {
      company: "Volcone",
      role: "product management, software engineering",
      link: "https://volcone.com",
      description: [
        "built transportation software to tackle the michigan mobility challenge"
      ],
      image: "/employment/volcone.png"
    }
  ];

  const projects: ProjectType[] = [
    // {
    //   title: "DulanyAI",
    //   description: "an open-source ai tool to quickly research patents",
    //   image: "/projects/dulanyai.png",
    //   githubLink: "https://github.com/yourusername/portfolio",
    //   technologies: ["next.js", "typescript", "sass", "flask", "python"]
    // }
  ];

  const coolShit: CoolShitType[] = [
    {
      title: "hosted michigan's first ever ai tinkerers meetup",
      link: "https://ann-arbor.aitinkerers.org/p/ai-tinkerers-ann-arbor-september-18"
    },
    {
      title: "scaled a 300+ person college entrepreneurship club bringing in companies / vcs like Google\
      , Bubble, Uber, Ramp, MongoDB, Neo, Greylock, Drive Capital, LeapYear, Contrary Capital, etc.",
      link: "https://v1michigan.com/"
    },
    {
      title: "ran an accountability group of 10+ people for an entire summer",
      link: "https://substack.com/home/post/p-147105734"
    },
    {
      title: "threw a 800+ person halloween party",
      link: "https://www.instagram.com/saddy.house/"
    },
    {
      title: "got 120k+ likes and over 2m+ views on tiktok",
      link: "https://www.tiktok.com/@real_kunjadia"
    },
    {
      title: "was ranked top 16 in the state of michigan for folkstyle wrestling",
    },
    {
      title: "started ship it, a regular coworking event designed for builders, at umich",
      link: "https://v1michigan.com/ship-it/"
    },
    {
      title: "solo-travelled for 2 weeks in europe",
    },
  ];

  return (
    <>
      <Head>
        <title>Dev Kunjadia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Dev Kunjadia - Software Engineer and Student at University of Michigan" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Dev Kunjadia" />
        <meta property="og:description" content="Engineering + Product + Design" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://kunjadia.dev" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dev Kunjadia" />
        <meta name="twitter:description" content="Engineering + Product + Design" />
        <meta name="twitter:image" content="/og-image.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-6 font-crimson relative bg-gradient-to-b from-[#F5F5DC] via-[#F5F5DC] to-transparent">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: false,
            background: {
              color: {
                value: "#F5F5DC",
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: ["#8B4513", "#D2691E", "#A0522D"],
              },
              links: {
                color: "#8B4513",
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
                speed: 1,
                straight: false,
                trail: {
                  enable: true,
                  length: 3,
                  fillColor: "#F5F5DC",
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

        <div className="absolute inset-0 backdrop-blur-[4px] bg-gradient-to-b from-[#F5F5DC]/35 via-[#F5F5DC]/20 to-[#F5F5DC]" />

        <div className={`transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative z-10 max-w-3xl w-full`}>
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-5xl text-left bg-clip-text text-transparent bg-gradient-to-r from-[#4A2511] to-[#8B4513] tracking-tight relative leading-normal py-2 font-crimson before:absolute before:content-['Dev_Kunjadia'] before:inset-0 before:text-[#F5F5DC] before:blur-[30px] before:-z-10 before:opacity-50">
              hi, i'm Dev
            </h1>

            <div className="text-xl text-[#4A2511] space-y-4 text-left">
              <p>i'm a software engineer studying CS + Math at the University of Michigan</p>
              <p>i'm interested in how engineering, design, and product level thinking can be combined to create intuitive solutions for complex problems</p>
              <p>you can reach me at <Link href="mailto:devk@umich.edu" className="underline transition-colors duration-300 hover:text-[#8B4513]">devk[at]umich[dot]edu</Link> — i am also active on twitter and linkedin</p>
            </div>
          </div>
        </div>

        <div className="fixed bottom-4 right-4 text-sm text-[#4A2511] font-crimson z-50 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm">
          Status:
          <div className="w-2 h-2 rounded-full bg-[#4A2511] animate-pulse"></div>
        </div>

        <div className="fixed md:left-4 md:top-1/2 md:-translate-y-1/2 top-4 left-0 right-0 md:right-auto flex flex-row md:flex-col items-center justify-center md:justify-center gap-4 z-50">
          <Link href="https://github.com/devk03"
            className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-[#4A2511] hover:text-[#8B4513] backdrop-blur-sm p-2 rounded-full">
            <svg
              className="w-[30px] h-[30px] opacity-70 hover:opacity-100 transition-opacity"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.167 8.84 21.49C9.34 21.581 9.52 21.272 9.52 21.007C9.52 20.719 9.512 19.763 9.512 19.763C7 20.369 6.32 18.976 6.32 18.976C5.78 17.661 5.06 17.352 5.06 17.352C4.12 16.619 5.13 16.619 5.13 16.619C6.18 16.681 6.792 17.784 6.792 17.784C7.72 19.37 9.282 19.037 9.52 18.772C9.58 18.085 9.85 17.597 10.12 17.352C7.78 17.107 5.32 16.063 5.32 11.717C5.32 10.402 5.81 9.334 6.62 8.513C6.56 8.248 6.13 7.027 6.72 5.474C6.72 5.474 7.78 5.178 9.52 6.398C10.32 6.163 11.12 6.04 11.92 6.04C12.72 6.04 13.52 6.163 14.32 6.398C16.06 5.178 17.12 5.474 17.12 5.474C17.71 7.027 17.28 8.248 17.22 8.513C18.03 9.334 18.52 10.402 18.52 11.717C18.52 16.063 16.06 17.107 13.72 17.352C14.05 17.659 14.32 18.197 14.32 19.092C14.32 20.37 14.312 20.657 14.312 21.007C14.312 21.272 14.492 21.581 14.992 21.49C18.967 20.167 21.832 16.419 21.832 12C21.832 6.477 17.355 2 11.832 2H12Z" />
            </svg>
          </Link>
          <Link href="https://kunjadia.substack.com/"
            className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-[#4A2511] hover:text-[#8B4513] backdrop-blur-sm p-2 rounded-full">
            <svg
              className="w-[30px] h-[24px] opacity-70 hover:opacity-100 transition-opacity"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/dev-kunjadia/"
            className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-[#4A2511] hover:text-[#8B4513] backdrop-blur-sm p-2 rounded-full">
            <svg
              className="w-[30px] h-[30px] opacity-70 hover:opacity-100 transition-opacity"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM18.5 18.5V13.2C18.5 11.5 17.1 10.1 15.4 10.1C14.5 10.1 13.4 10.6 12.8 11.4V10.3H10.3V18.5H12.8V13.6C12.8 12.8 13.4 12.2 14.2 12.2C15 12.2 15.6 12.8 15.6 13.6V18.5H18.5ZM6.9 8.2C7.8 8.2 8.5 7.5 8.5 6.6C8.5 5.7 7.8 5 6.9 5C6 5 5.3 5.7 5.3 6.6C5.3 7.5 6 8.2 6.9 8.2ZM8.2 18.5V10.3H5.7V18.5H8.2Z" />
            </svg>
          </Link>
          <Link href="https://twitter.com/dev_kunjadia"
            className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-[#4A2511] hover:text-[#8B4513] backdrop-blur-sm p-2 rounded-full">
            <svg
              className="w-[30px] h-[30px] opacity-70 hover:opacity-100 transition-opacity"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link href="https://www.tiktok.com/@real_kunjadia"
            className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-[#4A2511] hover:text-[#8B4513] backdrop-blur-sm p-2 rounded-full">
            <svg
              className="w-[30px] h-[30px] opacity-70 hover:opacity-100 transition-opacity"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.138-1.009 6.244 6.244 0 0 1-1.856-4.295h-3.397v14.89c0 .606-.049 1.193-.143 1.76a4.477 4.477 0 0 1-.413 1.281 4.438 4.438 0 0 1-3.865 2.252 4.456 4.456 0 0 1-4.451-4.46 4.456 4.456 0 0 1 4.451-4.46c.346 0 .682.04 1.004.116v-3.509a7.944 7.944 0 0 0-1.004-.064 7.98 7.98 0 0 0-7.97 7.917 7.98 7.98 0 0 0 7.97 7.917 7.98 7.98 0 0 0 7.97-7.917c0-.069-.001-.138-.003-.207V7.825a9.543 9.543 0 0 0 5.287 1.604V6.004a6.178 6.178 0 0 1-2.999-.442Z" />
            </svg>
          </Link>
          <Link href="https://www.youtube.com/@devkunjadia3792"
            className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-[#4A2511] hover:text-[#8B4513] backdrop-blur-sm p-2 rounded-full">
            <svg
              className="w-[30px] h-[30px] opacity-70 hover:opacity-100 transition-opacity"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </Link>
        </div>

        <div className="absolute bottom-8 animate-bounce flex flex-col items-center gap-2">
          <span className="text-sm text-[#4A2511]">see more</span>
          <div className="flex flex-col -space-y-1">
            <svg
              className="w-4 h-4 text-[#4A2511]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
      {/* See More */}

      {/* Main Content */}
      <div className="bg-[#F5F5DC] text-[#8B4513]">
        {/* Education Section */}
        <section className="max-w-4xl mx-auto pt-0 pb-20 px-6 relative z-20">
          <h2 className="text-3xl font-crimson mb-12 text-left bg-clip-text text-transparent bg-gradient-to-r from-[#4A2511] to-[#8B4513] tracking-tight relative leading-normal py-2 before:absolute before:content-['Education'] before:inset-0 before:text-[#F5F5DC] before:blur-[30px] before:-z-10 before:opacity-50">
            education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 font-crimson">
                {edu.image && (
                  <Link href={edu.link} className="w-20 md:w-32 h-20 md:h-32 relative flex-shrink-0 drop-shadow-[0_4px_4px_rgba(74,37,17,0.25)] hover:opacity-80 transition-opacity">
                    <Image
                      src={edu.image}
                      alt={edu.school}
                      fill
                      className="object-contain"
                    />
                  </Link>
                )}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-[#4A2511]">
                    <Link href={edu.link} className="hover:underline hover:text-[#8B4513]">{edu.school}</Link>
                  </h3>
                  <p className="text-[#8B4513]">{edu.degree}</p>
                  <p className="text-[#4A2511] mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cool Shit Section */}
        <section className="max-w-4xl mx-auto py-20 px-6 border-t border-[#D2B48C] relative z-20">
          <h2 className="text-3xl font-crimson mb-12 text-left bg-clip-text text-transparent bg-gradient-to-r from-[#4A2511] to-[#8B4513] tracking-tight relative leading-normal py-2 before:absolute before:content-['Cool_Shit'] before:inset-0 before:text-[#F5F5DC] before:blur-[30px] before:-z-10 before:opacity-50">
            some stuff i've done
          </h2>
          <div className="flex flex-col space-y-4 font-crimson">
            {coolShit.map((item, index) => (
              <span key={index} className="text-[#4A2511] text-lg">
                {item.link ? (
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 hover:underline hover:text-[#8B4513] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="max-w-4xl mx-auto py-20 px-6 border-t border-[#D2B48C] relative z-20">
          <h2 className="text-3xl font-crimson mb-12 text-left bg-clip-text text-transparent bg-gradient-to-r from-[#4A2511] to-[#8B4513] tracking-tight relative leading-normal py-2 before:absolute before:content-['Experience'] before:inset-0 before:text-[#F5F5DC] before:blur-[30px] before:-z-10 before:opacity-50">
            my experiences
          </h2>
          <div className="space-y-0">
            {experience.map((exp, index) => (
              <div key={index} className="flex items-start gap-6 p-6 font-crimson">
                {exp.image && (
                  <Link href={exp.link} className="w-14 h-14 relative flex-shrink-0 drop-shadow-[0_4px_4px_rgba(74,37,17,0.25)] hover:opacity-80 transition-opacity">
                    <Image
                      src={exp.image}
                      alt={exp.company}
                      fill
                      className="object-contain"
                    />
                  </Link>
                )}
                <div className="flex-grow">
                  <div className="flex md:items-center flex-col md:flex-row md:gap-2">
                    <h3 className="text-xl font-semibold text-[#4A2511]">
                      <Link href={exp.link} className="hover:underline hover:text-[#8B4513] transition-colors">{exp.company}</Link>
                    </h3>
                    <span className="text-[#4A2511] hidden md:inline">•</span>
                    <span className="text-[#4A2511]">{exp.role}</span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-[#4A2511]">{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies & Fun Section */}
        <section className="max-w-4xl mx-auto py-20 px-6 border-t border-[#D2B48C] relative z-20">
          <h2 className="text-3xl font-crimson mb-8 text-left bg-clip-text text-transparent bg-gradient-to-r from-[#4A2511] to-[#8B4513] tracking-tight relative leading-normal py-2 before:absolute before:content-['Hobbies_&_Fun'] before:inset-0 before:text-[#F5F5DC] before:blur-[30px] before:-z-10 before:opacity-50">
            hobbies and fun
          </h2>
          <div className="font-crimson flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-full bg-[#D2B48C]/50 text-[#4A2511]">strength training</span>
            <span className="px-4 py-2 rounded-full bg-[#D2B48C]/50 text-[#4A2511]">content creation</span>
            <span className="px-4 py-2 rounded-full bg-[#D2B48C]/50 text-[#4A2511]">solo travel</span>
            <span className="px-4 py-2 rounded-full bg-[#D2B48C]/50 text-[#4A2511]">exploring tech</span>
            <span className="px-4 py-2 rounded-full bg-[#D2B48C]/50 text-[#4A2511]">community building</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
