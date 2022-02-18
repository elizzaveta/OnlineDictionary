import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import GetWordDefinition from "../../../api/GetWordDefinition";
import Player from "./Audio/Player";

export default function WordCard(props){

    return(
        <div>
            <h1>{props.definition[0].word}</h1>
            <h2>{props.definition[0].phonetic}</h2>
            <Player audio={props.definition[0].phonetics[0].audio}/>
            <p>{props.definition[0].meanings[0].partOfSpeech}</p>
            <p>{props.definition[0].meanings[0].definitions[0].definition}</p>
        </div>
    )
}