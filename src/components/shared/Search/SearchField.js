import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./SearchField.module.css"

export default function SearchField() {
    const [searchQuery, setSearchQuery] = useState(null);
    const nav = useNavigate();

    const handleSubmit = function () {
        if(searchQuery!=null){
            pushQueryToLocalStorage()
            nav(`/search/${searchQuery}`)
        }
    }

    const pushQueryToLocalStorage = function (){
        let history = JSON.parse(localStorage.getItem('searchHistory'));

        if(history == null ) history = [];
        if(history.indexOf(searchQuery) !== -1){
            history.splice(history.indexOf(searchQuery),1);
        }
        history.unshift(searchQuery);
        if(history.length > 25) history.pop();

        localStorage.setItem('searchHistory', JSON.stringify(history));
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