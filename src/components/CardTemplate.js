import React from 'react';
import styles from "../styles/css/CardTemplate.module.css"

const CardTemplate = (props) => {
    const {children} = props;
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};

export default CardTemplate;