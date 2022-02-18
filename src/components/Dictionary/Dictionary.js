import React from "react";
import SearchField from "./Search/SearchField";
import WordCard from "./WordCard/WordCard";

export default function Dictionary() {

    return (
        <div className='container'>
            <SearchField/>
            <WordCard/>
        </div>
    )
}