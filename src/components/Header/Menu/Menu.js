import {Link} from "react-router-dom";
import {useState} from "react";
import styles from "./Menu.module.css"

export default function Menu() {
    const [IfMenuOn, setIfMenuOn] = useState(false)

    return (
        <div className={styles.wrapper}>
            <div className={styles.clickable} onClick={() => setIfMenuOn(!IfMenuOn)}>Menu</div>

            {IfMenuOn
                ? <div>
                    <div className={styles.arrowUp}/>
                    <div className={styles.menu}>
                        <Link to="/history" className={styles.clickable} onClick={() => setIfMenuOn(!IfMenuOn)}>
                            <p>History</p>
                        </Link>
                        <p className={styles.clickable}>About</p>
                        <p className={styles.clickable}>Contact</p>
                    </div>
                </div>
                : null
            }

        </div>
    )
}