import React, { useState } from "react";
import styles from "../styles/courses.module.css";
import { Fragment } from "react";
const Courses = () => {
  const [coursesShowing, setCoursesShowing] = useState(false);
  if (coursesShowing) {
    return (
      <Fragment>
        <button
          className={styles.showCourses}
          onClick={() => setCoursesShowing(false)}
        >
          Hide Course Work
        </button>
        <header className={styles.box}>
          <p className={styles.paragraph}>
            &#9824; Data Structures and Algorithms
          </p>
          <p className={styles.paragraph}>&#9827; Differential Calculus</p>
          <p className={styles.paragraph}>&#9829; Linear Algebra</p>
          <p className={styles.paragraph}>&#9830; Discrete Mathematics</p>
          <p className={styles.paragraph}>&#9824; Integral Calculus</p>
          <p className={styles.paragraph}>&#9827; Multivariabal Calculus</p>
          <p className={styles.paragraph}>&#9829; Microeconomics</p>
          <p className={styles.paragraph}>
            {" "}
            &#9830; Statistics and Data Analysis
          </p>
          <p className={styles.paragraph}>
            &#9824; Processes and Throughput Optimization
          </p>
        </header>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <button
          className={styles.showCourses}
          onClick={() => setCoursesShowing(true)}
        >
          Display Course Work
        </button>
      </Fragment>
    );
  }
};
export default Courses;
