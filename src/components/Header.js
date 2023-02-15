import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom"
import styles from "../styles/css/Menu.module.css";
import {useSelector} from "react-redux";

export default function Header() {
    const isMobile = useSelector(state => state.mobileDisplay.isMobile);
    const [y, setY] = useState(document.scrollingElement.scrollHeight);
    const [backgroundColor, setBackgroundColor] = useState("")

    const handleNavigation = useCallback(() => {
        (y > window.scrollY && window.scrollY < 100)
            ? setBackgroundColor("")
            : setBackgroundColor("bg-white");
        setY(window.scrollY)
    }, [y]);

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);
    }, [handleNavigation]);

    return (
        <header style={{transition: "background-color 0.3s ease-out"}}
                className={"mb-3 font-proxima-nova sticky-top p-3 " + backgroundColor}>
            {isMobile
                ? <HeaderContainer menuComponent={<MobileMenu/>}/>
                : <HeaderContainer menuComponent={<DesktopMenu/>}/>
            }
        </header>
    )
}

const HeaderContainer = (props) => {
    const {menuComponent} = props;

    return (
        <div className='container d-flex justify-content-between'>
            <Link to='/' className='fs-4  text-decoration-none text-dark'>Online Dictionary</Link>
            {menuComponent}
        </div>
    )
}

const DesktopMenu = () => {
    return (
        <div className={styles.linksWrapper}>
            <Link to="/about" className={styles.clickable}>
                <p className={styles.clickable}>About</p>
            </Link>
            <Link to="/history" className={styles.clickable}>
                <p>Search History</p>
            </Link>
        </div>
    )
}
const MobileMenu = () => {
    return (
        <div>Menu</div>
    )
}
