import React from "react";
import SearchField from "../../components/SearchField";
import styles from "../../styles/css/Home.module.css"
import SearchQueryExamples from "./SearchQueryExamples";

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <SearchField/>
            <SearchQueryExamples/>
        </div>
    )
}