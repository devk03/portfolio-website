import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="px-4">
      <div className="text-6xl sm:text-8xl lg:text-9xl text-center font-extrabold py-4">
        Dev Kunjadia
      </div>
      <div className="font-bold text-2xl sm:text-4xl lg:text-5xl text-center py-2">
        Logician. Athlete. Builder. Artist.
      </div>
      <div className="text-xl sm:text-2xl text-center py-4">
        <div className="font-bold">Student @ The University of Michigan</div>
        <br /> Prev. Software Engineering Intern @{" "}
        <a href="https://skyspecs.com/about">SkySpecs</a>
        <br /> Prev. Finance Intern @{" "}
        <a href="https://www.magna.com/company/company-information">Magna</a>
        <br /> Prev. Product Management Intern @{" "}
        <a href="https://volcone.com/about">Volcone</a>
      </div>
      <div className="flex flex-wrap justify-center items-center pt-10 space-x-4">
        <a
          href="https://drive.google.com/file/d/1bl9OLVorpBxt4mgu6SHkiQTZ-w38umNX/view?usp=sharing"
          download
        >
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
