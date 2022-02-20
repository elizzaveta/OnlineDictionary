import React, {useEffect, useState} from "react";
import SearchField from "../shared/Search/SearchField";
import WordCard from "./WordCard/WordCard";
import OtherMeanings from "./OtherMeanings/OtherMeanings";
import {useParams} from "react-router-dom";
import GetWordDefinition from "../../api/GetWordDefinition";

export default function Dictionary() {
    const {query} = useParams();
    const [definition, setDefinition] = useState(null);

    useEffect(() => {

        GetWordDefinition(query)
            .then(response => setDefinition(response.data));
    }, [])


    return (
        <div className='container'>
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