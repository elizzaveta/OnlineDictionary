import React, {useEffect, useState} from "react";
import SearchField from "../SearchField";
import WordCard from "./WordCard/WordCard";
import OtherMeanings from "./OtherMeanings/OtherMeanings";
import {useParams} from "react-router-dom";
import GetWordDefinition from "../../api/GetWordDefinition";
import styles from "../../styles/css/Dictionary.module.css"

export default function Dictionary() {
    const {query} = useParams();
    const [definition, setDefinition] = useState(null);

    useEffect(() => {
        GetWordDefinition(query)
            .then(response => setDefinition(response.data));
    }, [])


    return (
        <div>
            <SearchField/>
            {!definition ?
                null
                : <div>
                    <WordCard definition={definition}/>
                    <OtherMeanings definitions={definition}/>
                </div>
            }
        </div>
    )
}