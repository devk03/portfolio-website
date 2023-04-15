import React, { useState } from "react";
import styles from "../styles/courses.module.css";
import { Fragment } from "react";
const Courses = () => {
  const [coursesShowing, setCoursesShowing] = useState(false);
  if (coursesShowing) {
    return (
      <Fragment>
        <button onClick={() => setCoursesShowing(false)}>
          Hide Course Work
        </button>
        <header>
          <p>&#x2756; Data Structures and Algorithms &#x2756;</p>
          <p>&#x2756; Differential Calculus &#x2756;</p>
          <p>&#x2756; Proof Based Linear Algebra &#x2756;</p>
          <p>&#x2756; Discrete Mathematics &#x2756;</p>
          <p>&#x2756; Integral Calculus &#x2756;</p>
          <p>&#x2756; Multivariable Calculus &#x2756;</p>
          <p>&#x2756; Microeconomics &#x2756;</p>
          <p>&#x2756; Computer Organization &#x2756;</p>
          <p>&#x2756; Statistics and Data Analysis &#x2756;</p>
          <p>&#x2756; Throughput Optimization &#x2756;</p>
        </header>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <button onClick={() => setCoursesShowing(true)}>
          Display Course Work
        </button>
      </Fragment>
    );
  }
};
export default Courses;
