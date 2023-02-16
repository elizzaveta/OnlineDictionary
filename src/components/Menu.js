import React, {useState} from 'react';
import menuIcon from "../images/icons/menuIcon.png"
import {navigationLinks} from "../config/navigationLinks";
import {Link} from "react-router-dom";
import styles from "../styles/css/Menu.module.css"
import closeIcon from "../images/icons/closeIcon.png"

const Menu = () => {
    const [toggleMenu, setToggleMenu] = useState(true);
    const handleMenuToggle = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <div className={styles.wrapper}>
            <img src={menuIcon} alt="menu icon" onClick={handleMenuToggle}></img>
            {
                toggleMenu
                    ? null
                    : <div>
                        <div className={styles.menu}>
                            <img src={closeIcon} onClick={handleMenuToggle} alt="close icon"/>
                            <div className={styles.links}>
                                {navigationLinks.header.map((linkItem) =>
                                    <Link to={linkItem.to} key={navigationLinks.header.indexOf(linkItem)}
                                          onClick={handleMenuToggle}>
                                        <p>{linkItem.text}</p>
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className={styles.shadow} onClick={handleMenuToggle}></div>
                    </div>
            }
        </div>
    );
};

export default Menu;