import React from "react";
import Player from "./Audio/Player";
import styles from "../../../styles/css/WordCard.module.css"

export default function WordCard(props) {
    const {definition} = props;
    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.wordWrapper}>
                    <h1>{definition[0].word}</h1>
                    {
                        definition[0].phonetics[0]
                        ? <Player audio={definition[0].phonetics[0].audio}/>
                            : null
                    }
                </div>
                <h3 className={styles.phonetic}>{definition[0].phonetic}</h3>
            </div>
            <div>
                <p>{props.definition[0].meanings[0].partOfSpeech}</p>
                <h5 className={styles.meaning}>{definition[0].meanings[0].definitions[0].definition}</h5>
            </div>
        </div>
    )
}