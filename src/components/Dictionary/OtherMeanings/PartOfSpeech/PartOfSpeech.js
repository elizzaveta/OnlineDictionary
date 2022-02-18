import React from 'react'

export default function PartOfSpeech(props){
    return (
        <div>
            <p>{props.meanings.partOfSpeech}</p>
            {props.meanings.definitions.map(definition=>
                <div>
                    <p>{definition.definition}</p>
                    <p>{definition.example}</p>
                </div>
            )}
        </div>
    )
}
