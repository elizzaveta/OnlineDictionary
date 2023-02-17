import React from 'react'
import PartOfSpeech from "./PartOfSpeech/PartOfSpeech";
import styles from "./OtherMeanings.module.css"

export default function OtherMeanings(props){
    return (
        <div>
            <h5 className={styles.title}>Other Meanings</h5>
            {props.definitions.map(definition=>
                <div>
                    {definition.meanings.map(partOfSpeech=>
                        <PartOfSpeech meanings={partOfSpeech}/>
                    )}
                </div>
            )}
        </div>
    )
}

