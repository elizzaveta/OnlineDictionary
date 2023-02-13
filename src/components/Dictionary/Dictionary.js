import React, {useEffect, useState} from "react";
import SearchField from "../SearchField";
import WordCard from "./WordCard/WordCard";
import OtherMeanings from "./OtherMeanings/OtherMeanings";
import {useParams} from "react-router-dom";
import GetWordDefinition from "../../api/GetWordDefinition";
import styles from "../../styles/css/Dictionary.module.css"
import CardTemplate from "../CardTemplate";

export default function Dictionary() {
    const {query} = useParams();
    const [definition, setDefinition] = useState(null);
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        GetWordDefinition(query)
            .then(response => setDefinition(response.data))
            .catch(() => setNotFound(true));
    }, [])


    return (
        <div>
            <SearchField/>
            {definition ?
                <div className={styles.resultWrapper}>
                    <WordCard definition={definition}/>
                    <OtherMeanings definitions={definition}/>
                </div>
                : null
            }
            {notFound ?
                <div>
                    <CardTemplate children={
                        <div className={styles.notFoundWrapper}>
                            <h3>Word definition not found</h3>
                            <h5>Try to check spelling of your search query</h5>
                        </div>
                    }/>
                </div>
                :null
            }
        </div>
    )
}