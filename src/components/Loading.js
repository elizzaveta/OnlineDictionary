import React from "react";
import styles from "../styles/css/Loading.module.css"

export default function Loading(){

    return(
        <div className={styles.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}