import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "../../../styles/css/SearchField.module.css"
import {pushToSearchHistory} from "../../../localStorage";

export default function SearchField() {
    const [searchQuery, setSearchQuery] = useState(null);
    const navigation = useNavigate();

    const handleSubmit = () =>{
        if(searchQuery!=null){
            pushToSearchHistory(searchQuery)
            navigation(`/search/${searchQuery}`)
        }
    }
    const handleChange = function (event) {
        setSearchQuery(event.target.value);
    }

    return (
        <div className={styles.wrapper}>
            <h5 className={styles.title}>Type a word to find it's meaning:</h5>
            <form className={styles.searchWrapper} onSubmit={handleSubmit}>
                <input className={styles.searchInput} type="text" onChange={handleChange}/>
                <input className={styles.submitButton} type="submit" value="Search"/>
            </form>
        </div>
    )
}