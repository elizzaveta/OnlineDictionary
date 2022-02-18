import React, {useCallback, useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom"

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
                <Link to='/' className='fs-4  text-decoration-none text-dark'>Art Museum</Link>
                <div>
                    <NavLink to="departments" className='fs-5 text-muted text-decoration-none'>Departments</NavLink>
                </div>
            </div>
        </header>
    )
}

function MobileHeader(){
    const [IfMenuOn, setIfMenuOn] = useState(false)

    let menu_details
    let menu_shadow

    const toggleMenu = () => {
        setIfMenuOn(!IfMenuOn)
    }

    if(IfMenuOn){
        menu_details = <div className="menu-details">
            <nav className="links-in-menu">
                <Link to="/blog" className="link-router link-dark" onClick={toggleMenu}>Blog</Link>
                <Link to="/subscription" className="link-router link-dark" onClick={toggleMenu}>Subscription</Link>
                <Link to="/about-us" className="link-router link-dark" onClick={toggleMenu}>About us</Link>
            </nav>
        </div>
        menu_shadow = <div className="menu-shadow" onClick={()=>setIfMenuOn(!IfMenuOn)}>

        </div>
    }

    return(
        <header>
            <div className="h-wrapper">
                <div className="left">
                    <div className="logo"/>
                    <Link to="/" className="company-name link-router link-blue" onClick={()=>setIfMenuOn(false)}>SLH gym</Link>
                </div>

                <div className="menu" onClick={()=>setIfMenuOn(!IfMenuOn)}>---</div>
                {menu_details}
                {menu_shadow}
            </div>
        </header>
    )
}