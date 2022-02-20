import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./SearchField.module.css"

export default function SearchField() {
    const [searchQuery, setSearchQuery] = useState(null);
    const nav = useNavigate();

    const handleSubmit = function () {
        if(searchQuery!=null){
            nav(`/search/${searchQuery}`)
        }
    }

    const handleChange = function (event) {
        setSearchQuery(event.target.value);
    }

    return (
        <div className='container'>
            <h5 className={styles.title}>Type a word to find it's meaning:</h5>
            <form className={styles.searchWrapper} onSubmit={handleSubmit}>
                <input className={styles.searchInput} type="text" onChange={handleChange}/>
                <input className={styles.submitButton} type="submit" value="Search"/>
            </form>
        </div>
    )
}