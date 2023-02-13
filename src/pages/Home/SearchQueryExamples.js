import React from "react";
import {Link} from "react-router-dom";
import styles from "../../styles/css/SearchQueryExamples.module.css"
import {searchQueryExamples} from "../../config/SearchQueryExamples";

export default function SearchQueryExamples() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Examples:</div>
            <div className={styles.linksWrapper}>
                {searchQueryExamples.map((searchQuery)=>
                    <Link to={`/search/${searchQuery}`} key={searchQuery}>
                        <button className={styles.button}>{searchQuery}</button>
                    </Link>
                )}
            </div>
        </div>
    )
}