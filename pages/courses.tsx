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
          <p className={styles.paragraph}>// Data Structures and Algorithms</p>
          <p className={styles.paragraph}>// Differential Calculus</p>
          <p className={styles.paragraph}>// Linear Algebra</p>
          <p className={styles.paragraph}>// Discrete Mathematics</p>
          <p className={styles.paragraph}>// Integral Calculus</p>
          <p className={styles.paragraph}>// Multivariabal Calculus</p>
          <p className={styles.paragraph}>// Microeconomics</p>
          <p className={styles.paragraph}>// Statistics and Data Analysis</p>
          <p className={styles.paragraph}>
            // Processes and Throughput Optimization
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
