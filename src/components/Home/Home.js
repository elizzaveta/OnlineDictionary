import React from "react";
import SearchField from "../shared/Search/SearchField";
import styles from "../../styles/css/Home.module.css"
import SearchQueryExamples from "./SearchQueryExamples/SearchQueryExamples";

export default function Home() {


    return (
        <div className={styles.wrapper}>
            <div className={'container ' + styles.searchFieldWrapper}>
                <SearchField/>
                <SearchQueryExamples/>
            </div>
        </div>
    )
}