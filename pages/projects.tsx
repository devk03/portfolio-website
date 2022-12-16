import React, {useState} from "react";
import styles from "../styles/projects.module.css";
import { Fragment } from "react";
const Projects = () => {
    const [projectsShowing, setProjectsShowing] = useState(false);
    if (projectsShowing) {
      return (
        <Fragment>
          <button
            className={styles.showCourses}
            onClick={() => setProjectsShowing(false)}
          >
            Hide Projects
          </button>
          <header className={styles.box}>
            <p className={styles.paragraph}>
                <a href="https://github.com/devk03/Meetup_Manager">Meetup Manager</a>
            </p>
            <p className={styles.paragraph}>
                <a href="https://github.com/devk03/CV-Object_Detection">CV Object Detection</a>
            </p>
            <p className={styles.paragraph}>
                <a>Dynamic Expense Tracker - In Progress</a>
            </p>
            <p className={styles.paragraph}>
                <a href="https://github.com/devk03/CandyLandUX">Candy Land</a>
            </p>
          </header>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <button
            className={styles.showCourses}
            onClick={() => setProjectsShowing(true)}
          >
            Display Projects
          </button>
        </Fragment>
      );
    }
}
export default Projects;