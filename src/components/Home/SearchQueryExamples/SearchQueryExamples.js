import React from "react";
import {Link} from "react-router-dom";
import styles from "../../../styles/css/SearchQueryExamples.module.css"

export default function SearchQueryExamples() {


    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Examples:</div>
            <div>
                <Link to='/search/yoga'>
                    <button className={styles.button}>yoga</button>
                </Link>
                <Link to='/search/excitement'>
                    <button className={styles.button}>excitement</button>
                </Link>
                <Link to='/search/compass'>
                    <button className={styles.button}>compass</button>
                </Link>
            </div>
        </div>
    )
}