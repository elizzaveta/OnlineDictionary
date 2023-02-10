import React from 'react';
import styles from "../../styles/css/About.module.css"

const About = () => {
    return (
        <div className={styles.wrapper}>
            <h1>About this site</h1>
            <h2>Idea</h2>
            <p>Online Dictionary is a web page that contains English words and their meanings.</p>
            <p>This site is created for learning purposes.</p>
            <br/>
            <h2>Features</h2>
            <ul>
                <li>Words' meanings</li>
                <li>Audio of pronunciation</li>
                <li>Search history</li>
            </ul>
            <br/>
            <h2>Technology stack</h2>
            <p>This page is created with React.js with use of css modules.</p>
            <br/>
            <h2>API</h2>
            <p>Dictionary information is taken from <a href="todo">Dictionary API</a>.</p>
            <br/>
            <h2>Source Code</h2>
            <p>Source code of this page can be found at <a href="https://github.com/elizzaveta/OnlineDictionary">GitHub</a>.</p>
        </div>
    );
};

export default About;