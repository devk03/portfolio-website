import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="px-4">
      <div className="text-6xl sm:text-8xl lg:text-9xl text-center font-extrabold py-4">
        Dev Kunjadia
      </div>
      <div className="font-bold text-2xl sm:text-4xl lg:text-5xl text-center py-4">
        Logician. Athlete. Builder. Artist.
      </div>
      <div className="font-semibold text-xl sm:text-2xl text-center py-4">
        Student @ The University of Michigan <br /> Software Engineering
        Intern @ SkySpecs
      </div>
      <div className="flex flex-wrap justify-center items-center pt-10 space-x-4">
        <a href="Kunjadia_resume.pdf" download>
          <Image
            src="/links/cv.png"
            alt="Link to download my Resume"
            width={80}
            height={80}
          />
        </a>
        <a href="https://github.com/devk03">
          <Image
            src="/links/github.png"
            alt="Link to my Github"
            width={80}
            height={80}
          />
        </a>
        <a href="https://www.linkedin.com/in/dev-kunjadia/">
          <Image
            src="/links/linkedin.png"
            alt="Link to my LinkedIn"
            width={80}
            height={80}
          />
        </a>
      </div>
    </div>
  );
};
export default AboutMe;
