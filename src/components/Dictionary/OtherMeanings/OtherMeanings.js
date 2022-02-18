import React from 'react'
import PartOfSpeech from "./PartOfSpeech/PartOfSpeech";

export default function OtherMeanings(props){
    return (
        <div>
            {props.meanings.map(partOfSpeech=>
                <PartOfSpeech meanings={partOfSpeech}/>
            )}
        </div>
    )
}
