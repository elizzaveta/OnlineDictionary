import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom"
import Menu from "./Menu/Menu";
import styles from "../../styles/css/Menu.module.css";

export default function Header(){
    const [isMobile, setIsMobile] = useState(false);
    window.addEventListener('resize', (e) => {setIsMobile(window.innerWidth < 991)})

    return  <DesktopHeader/>
}

function DesktopHeader(){
    const [y,
        setY] = useState(document.scrollingElement.scrollHeight);
    const [scrollDirection,
        setScrollDirection] = useState("you have not scrolled yet");
    const [backgroundColor, setBackgroundColor] = useState("py-3")

    const handleNavigation = useCallback((e) => {
        if (y > window.scrollY) {
            setScrollDirection("Scrolling Up");
            setBackgroundColor("")
            console.log("scrolling up");
        } else if (y < window.scrollY) {
            setBackgroundColor("bg-white")
            console.log("scrolling down");
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
