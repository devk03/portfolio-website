import React, { useState } from "react";
import styles from "../../styles/bio.module.css";
import { Fragment } from "react";
const Bio = () => {
  return (
    <Fragment>
      <header className={styles.box}>
        <h1 className={styles.name}> &lt; Dev Kunjadia /&gt;</h1>
        <p className={styles.basicDescription}>
          Computer Scientist / Mathematician @ The University of Michigan
        </p>
        <div>
          <a className={styles.links} href="Kunjadia_resume.pdf" download>
            &#x2770; Resume &#x2771;
          </a>
          <br />
          <a
            className={styles.links}
            href="https://www.linkedin.com/in/dev-kunjadia/"
          >
            &#x2770; LinkedIn &#x2771;
          </a>
          <br />
          <a className={styles.links} href="https://github.com/devk03">
            {" "}
            &#x2770; Github &#x2771;
          </a>
        </div>
      </header>
    </Fragment>
  );
};
export default Bio;
