import React, {useCallback, useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom"
import Menu from "./Menu/Menu";

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
    const [padding, setPadding] = useState("py-3")

    const handleNavigation = useCallback((e) => {

        if (y > window.scrollY) {
            setScrollDirection("Scrolling Up");
            setPadding("py-3")
            console.log("scrolling up");
        } else if (y < window.scrollY) {
            setPadding("")
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
        <header className={"mb-3 font-proxima-nova sticky-top bg-white " + padding} >
            <div className='container d-flex justify-content-between'>
                <Link to='/' className='fs-4  text-decoration-none text-dark'>Online Dictionary</Link>
                <Menu/>
            </div>
        </header>
    )
}
