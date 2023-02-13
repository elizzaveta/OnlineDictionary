import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom"
import styles from "../styles/css/Menu.module.css";

export default function Header(){
    const [isMobile, setIsMobile] = useState(false);
    window.addEventListener('resize', (e) => {setIsMobile(window.innerWidth < 991)})

    return  <DesktopHeader/>
}

function DesktopHeader(){
    const [y, setY] = useState(document.scrollingElement.scrollHeight);
    const [backgroundColor, setBackgroundColor] = useState("py-3")

    const handleNavigation = useCallback(() => {
        if (y > window.scrollY && window.scrollY < 100) {
            setBackgroundColor("")
        } else {
            setBackgroundColor("bg-white")
        }
        setY(window.scrollY)
    }, [y]);

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    return(
        <header style={{transition: "background-color 0.3s ease-out"}} className={"mb-3 font-proxima-nova sticky-top p-3 " + backgroundColor} >
            <div className='container d-flex justify-content-between'>
                <Link to='/' className='fs-4  text-decoration-none text-dark'>Online Dictionary</Link>
                <div className={styles.linksWrapper}>
                    <Link to="/about" className={styles.clickable}>
                        <p className={styles.clickable}>About</p>
                    </Link>
                    <Link to="/history" className={styles.clickable}>
                        <p>Search History</p>
                    </Link>

                </div>
                {/*<Menu/>*/}
            </div>
        </header>
    )
}
