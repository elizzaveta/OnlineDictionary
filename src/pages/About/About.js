import React from 'react';
import styles from "../../styles/css/About.module.css"

const About = () => {
    return (
        <div className={styles.wrapper}>
            <h2>About this site</h2>
            <h4>Idea</h4>
            <p>Online Dictionary is a web page that contains English words and their meanings.</p>
            <p>This site is created for learning purposes.</p>
            <br/>
            <h4>Features</h4>
            <ul>
                <li>Words' meanings</li>
                <li>Audio of pronunciation</li>
                <li>Search history</li>
            </ul>
            <br/>
            <h4>Technology stack</h4>
            <p>This page is created with React.js with use of css modules.</p>
            <br/>
            <h4>API</h4>
            <p>Dictionary information is taken from <a href="https://dictionaryapi.dev/" target="_blank" rel="noreferrer">Dictionary API</a>.</p>
            <br/>
            <h4>Source Code</h4>
            <p>Source code of this page can be found at <a href="https://github.com/elizzaveta/OnlineDictionary" target="_blank" rel="noreferrer">GitHub</a>.</p>
        </div>
    );
};

export default About;