import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom"
import styles from "../styles/css/Menu.module.css";
import {useSelector} from "react-redux";
import {navigationLinks} from "../config/navigationLinks";
import LinksContainer from "./LinksContainer";
import Menu from "./Menu";

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
                className={"mb-3 font-proxima-nova sticky-top pt-3 " + backgroundColor}>
            {isMobile
                ? <HeaderContainer menuComponent={<Menu/>}/>
                : <HeaderContainer menuComponent={<LinksContainer links={navigationLinks.header}/>}/>
            }
        </header>
    )
}

const HeaderContainer = (props) => {
    const {menuComponent} = props;

    return (
        <div className='d-flex justify-content-between'>
            <Link to='/' className='fs-4  text-decoration-none text-dark'>Online Dictionary</Link>
            {menuComponent}
        </div>
    )
}

