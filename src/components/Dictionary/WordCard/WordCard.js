import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import GetWordDefinition from "../../../api/GetWordDefinition";
import Player from "./Audio/Player";

export default function WordCard(){
    const {query} = useParams();
    const [definition, setDefinition] = useState(null);

    useEffect(()=>{
        GetWordDefinition(query)
            .then(response => setDefinition(response.data));
    },[])


    return(
        <div>
            {!definition
                ? null
                : <div>
                    <h1>{definition[0].word}</h1>
                    <h2>{definition[0].phonetic}</h2>
                    <Player audio={definition[0].phonetics[0].audio}/>
                </div>
            }
        </div>
    )
}