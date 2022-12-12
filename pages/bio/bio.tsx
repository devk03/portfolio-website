import React from "react";
import styles from "../../styles/bio.module.css";
const Bio = () => {
  return (
    <header className={styles.box}>
      <h1 className={styles.name}> &lt; Dev Kunjadia /&gt;</h1>
      <p className={styles.paragraph}>
        Hi. My name is Dev Kunjadia. I am currently a junior at the University
        of Michgian studying computer science and pure mathematics. I am
        interested in software engineering, quantitative trading, product
        management, and machine learning roles.
      </p>
      <p className={styles.paragraph}>
        About Me: On my own I am studying for an AWS SAA-C03 Certificate, refining my
        knowledge of data structures and algorithms, and learning about
        quantitative trading.
      </p>
    </header>
  );
};
export default Bio;
