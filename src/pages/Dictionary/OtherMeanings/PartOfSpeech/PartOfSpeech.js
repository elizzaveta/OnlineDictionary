import React from 'react'
import styles from "./PartOfSpeech.module.css"

export default function PartOfSpeech(props){
    return (
        <div className={styles.wrapper}>
            <div className={styles.partOfSpeech}>
                <p>{props.meanings.partOfSpeech}</p>
            </div>
            <div>
                {props.meanings.definitions.map(definition=>
                    <div>
                        <p>{definition.definition}</p>
                        {/*<p>{definition.example}</p>*/}
                    </div>
                )}
            </div>
        </div>
    )
}
