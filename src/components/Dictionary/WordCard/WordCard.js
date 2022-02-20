import React from "react";
import Player from "./Audio/Player";
import styles from "./WordCard.module.css"

export default function WordCard(props){

    return(
        <div className={styles.wordCardWrapper}>
            <div className={styles.wordWrapper}>
                <h1>{props.definition[0].word}</h1>
                <Player audio={props.definition[0].phonetics[0].audio}/>
            </div>
            <h3 className={styles.phonetic}>{props.definition[0].phonetic}</h3>
            <p>{props.definition[0].meanings[0].partOfSpeech}</p>
            <p className={styles.meaning}>{props.definition[0].meanings[0].definitions[0].definition}</p>
        </div>
    )
}