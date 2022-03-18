import {useEffect, useState} from "react";
import styles from "./History.module.css"
import {Link} from "react-router-dom";

export default function History() {
    const [searchHistory, setSearchHistory] = useState(null)

    useEffect(()=>{
        setSearchHistory(JSON.parse(localStorage.getItem('searchHistory')));
    }, [])


    return (
        <div className={"container"}>
            <h3 className={styles.title}>SearchHistory</h3>
            {searchHistory
                ? <div className={styles.historyWrapper}>{
                    searchHistory.map(searchQuery =>
                        <div>
                            <Link to={'/search/'+searchQuery} className={styles.word}><h5>{searchQuery}</h5></Link>
                            <i className="fa-solid fa-xmark"/>
                        </div>
                    )
                }</div>
                : <h5 className={styles.message}>You have no search history. </h5>
            }
        </div>
    )
}