import React from "react";
const Bio = () => {
  return (
    <div>
      <div className="flex justify-center px-[9%] pt-[15%]">
        <div className="flex flex-col rounded-lg bg-white shadow-xl dark:bg-zinc-900 md:max-w-xxl md:flex-row">
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-[30%] md:rounded-none md:rounded-l-lg"
            src="bio.png"
            alt="Wrestling photo"
          />
          <div className="flex flex-col justify-start p-10">
            <h5 className="mb-2 pb-3 font-bold text-6xl text-neutral-800 dark:text-neutral-50">
              Hi, I'm Dev Kunjadia.
            </h5>
            <p className="mb-4 text-2xl text-neutral-600 dark:text-neutral-200">
              I'm a student at the University of Michigan studying Computer
              Science and Mathematics. I am seeking roles in software
              engineering, quantitative trading, and machine learning.
            </p>
            <p className="mb-4 text-2xl text-neutral-600 dark:text-neutral-200">
              I am a man of many interests. For fun I like to study philosophy,
              weight train, run, play chess, wrestle, and play the ukelele.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
              Last updated 03/12/2022.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bio;