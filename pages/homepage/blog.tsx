import React from "react";
import { Fragment } from "react";
const Blog = () => {
  return (
    <Fragment>
      <form className="pt-[50%] text-center justify-center  align-middle">
        <input className="items-center"/>
        <button
          type="submit"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Submit Entry
        </button>
      </form>
    </Fragment>
  );
};
export default Blog;
