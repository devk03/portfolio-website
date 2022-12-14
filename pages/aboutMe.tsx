import React from "react";
import styles from "../styles/aboutMe.module.css";
const AboutMe = () => {
    return (
        <div className={styles.box}>
            <h2 className={styles.aboutMe}>About Me</h2>
            <p className={styles.p}>Hi! My name is Dev Kunjadia. I am a student at the University of Michigan 
            studying Computer Science and Mathematics. I am seeking roles in software engineering, 
            quantitative trading, and machine learning. For fun I like to play chess, play poker, weight train, read, wrestle, and listen to music! 
            Feel free to email me at devk@umich.edu for any professional inquiries.</p>
        </div>
    )
}
export default AboutMe;