import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
      <p className="text-9xl text-center font-extrabold	">
        Dev Kunjadia
      </p>
      <p className="font-bold text-5xl text-center pt-5">
        Logician. Athlete. Builder. Artist.
      </p>
      <p className="font-semibold text-2xl text-center pt-5">
        Student @ The University of Michigan <br></br> Software Engineering
        Intern @ SkySpecs
      </p>
      <div className="justify-center object-scale-down flex pt-10">
        <a href="Kunjadia_resume.pdf" download>
          <Image
            src="/links/cv.png"
            alt="Link to download my Resume"
            width={100}
            height={100}
          />
        </a>
        <a href="https://github.com/devk03">
          <Image
            src="/links/github.png"
            alt="Link to my Github"
            width={100}
            height={100}
          />
        </a>
        <a href="https://www.linkedin.com/in/dev-kunjadia/">
          <Image
            src="/links/linkedin.png"
            alt="Link to my LinkedIn"
            width={100}
            height={100}
          />
        </a>
      </div>
    </div>
  );
};
export default AboutMe;
