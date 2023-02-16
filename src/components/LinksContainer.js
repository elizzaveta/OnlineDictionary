import React from 'react';
import {Link} from "react-router-dom";
import styles from "../styles/css/LinksContainer.module.css"

const LinksContainer = (props) => {
    const {links} = props;
    return (
        <div className={styles.linksWrapper}>
            {links.map((linkItem)=>
                <Link to={linkItem.to} className={styles.clickable} key={links.indexOf(linkItem)}>
                    <p>{linkItem.text}</p>
                </Link>
            )}
        </div>
    );
};

export default LinksContainer;