import React, { Fragment } from "react";
import Image from "next/image";
const Bio = () => {
  return (
    <Fragment>
      <div className="items-center flex justify-center px-4 md:px-[9%]">
        <div className="flex flex-col rounded-lg bg-white shadow-xl dark:bg-zinc-900 md:max-w-xxl md:flex-row">
          <div className="relative w-full aspect-w-1 aspect-h-1 md:flex-1 md:rounded-l-lg overflow-hidden">
            <Image
              src="/bio.png"
              alt="Wrestling photo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="flex flex-col justify-start p-4 md:p-10">
            <h5 className="mb-2 pb-3 text-center font-bold text-4xl md:text-7xl text-neutral-800 dark:text-neutral-50">
              Hi, I&apos;m Dev Kunjadia!
            </h5>
            <p className="mb-4 text-xl text-center md:text-3xl text-neutral-600 dark:text-neutral-200">
              I&apos;m a student at the University of Michigan studying Computer
              Science and Mathematics. I am seeking roles in software
              engineering, quantitative trading, and deep learning.
            </p>
            <p className="mb-4 text-xl text-center md:text-3xl text-neutral-600 dark:text-neutral-200">
              For fun I like to study philosophy, weight train, run, play chess,
              wrestle, and play the ukelele.
            </p>
            <p className="text-xs text-neutral-500 text-center dark:text-neutral-300">
              Last updated 03/12/2022.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Bio;
