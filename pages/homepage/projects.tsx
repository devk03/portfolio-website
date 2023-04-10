import React, { useState } from "react";
import { Fragment } from "react";
import Image from "next/image";
const Projects = () => {
  return (
    <Fragment>
      <div className="flex flex-col m-auto p-auto">
        <h1 className="flex pb-10 text-6xl lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-zinc-900-800 justify-center">
          Checkout My Projects
        </h1>
      </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            src="/img/card-top.jpg"
            alt="Sunset in the mountains"
            width={5000}
            height={5000}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span v="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
    </Fragment>
  );
};
export default Projects;
