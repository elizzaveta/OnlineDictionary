import {useEffect, useState} from "react";
import styles from "./History.module.css"
import {Link} from "react-router-dom";
import crossIcon from "../../images/icons/cross.svg"

export default function History() {
    const [searchHistory, setSearchHistory] = useState(null)

    useEffect(()=>{
        setSearchHistory(JSON.parse(localStorage.getItem('searchHistory')));
    }, [])

    const deleteSearchQuery = (e) => {
        const targetQuery = e.target.id;
        const updatedSearchHistory = searchHistory.filter((query)=> query !== targetQuery);
        setSearchHistory(updatedSearchHistory);
        localStorage.setItem('searchHistory', JSON.stringify(updatedSearchHistory));
    }

    return (
        <div className={"container"}>
            <h3 className={styles.title}>SearchHistory</h3>
            {searchHistory
                ? <div className={styles.historyWrapper}>{
                    searchHistory.map(searchQuery =>
                        <div id={searchQuery + "_div"}>
                            <Link to={'/search/'+searchQuery} className={styles.word}><h5>{searchQuery}</h5></Link>
                            <img id={searchQuery} className={styles.cross} src={crossIcon} onClick={deleteSearchQuery} alt="Delete"/>
                        </div>
                    )
                }</div>
                : <h5 className={styles.message}>You have no search history. </h5>
            }
        </div>
    )
}