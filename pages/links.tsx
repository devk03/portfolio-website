//set up function react component
import React from "react";
import { Fragment } from "react";
//keep going
const Links = () => {
  return (
    <Fragment>
      <header>
        <div className="pt-20 text-5xl text-right">
          <a className="" href="Kunjadia_resume.pdf" download>
            Resume.
          </a>
          <a className="pl-10" href="https://www.linkedin.com/in/dev-kunjadia/">
            LinkedIn.
          </a>
          <a className="pl-10 pr-20" href="https://github.com/devk03">
            Github.
          </a>
        </div>
      </header>
    </Fragment>
  );
};
export default Links;
