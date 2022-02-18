import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function SearchField() {
    const [searchQuery, setSearchQuery] = useState(null);
    const nav = useNavigate();

    const handleSubmit = function () {
        nav(`/search/${searchQuery}`)
    }

    const handleChange = function (event) {
        setSearchQuery(event.target.value);
    }

    return (
        <div className='container'>

            <form onSubmit={handleSubmit}>
                <label>
                    <p>Type a word to find it's meaning:</p>
                    <input type="text" onChange={handleChange}/>
                </label>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}