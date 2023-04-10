import React, { Fragment } from "react";
import Image from "next/image";
const Bio = () => {
  return (
    <Fragment>
      <div className="items-center flex align-middle justify-center px-[9%]">
        <div className="flex flex-col rounded-lg bg-white shadow-xl dark:bg-zinc-900 md:max-w-xxl md:flex-row">
          <Image
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-[30%] md:rounded-none md:rounded-l-lg"
            src="/bio.png"
            alt="Wrestling photo"
            width={1000}
            height={1000}
          />
          <div className="flex flex-col justify-start p-10">
            <h5 className="mb-2 pb-3 font-bold text-7xl text-neutral-800 dark:text-neutral-50">
              Hi, I&apos;m Dev Kunjadia.
            </h5>
            <p className="mb-4 text-3xl text-neutral-600 dark:text-neutral-200">
              I&apos;m a student at the University of Michigan studying Computer
              Science and Mathematics. I am seeking roles in software
              engineering, quantitative trading, and machine learning.
            </p>
            <p className="mb-4 text-3xl text-neutral-600 dark:text-neutral-200">
              For fun I like to study philosophy, weight train, run, play chess,
              wrestle, and play the ukelele.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
              Last updated 03/12/2022.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Bio;
