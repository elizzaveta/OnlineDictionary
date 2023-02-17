import React, {useEffect, useState} from "react";
import bgImage1 from "../../../../images/1.jpg"
import bgImage2 from "../../../../images/2.jpg"
import bgImage3 from "../../../../images/3.jpg"
import bgImage4 from "../../../../images/4.jpg"
import bgImage5 from "../../../../images/5.jpg"
import bgImage6 from "../../../../images/6.jpg"
import bgImage7 from "../../../../images/7.jpg"
import bgImage8 from "../../../../images/8.jpg"
import styles from "./ShadowImage.module.css"

export default function ShadowImage() {
    const [textureImage, setTextureImage] = useState(null);

    useEffect(()=>{
        getTextureImageFile().then(file=>setTextureImage(file))
    }, [])

    return (
        <img src={textureImage} className={styles.shadowImage}/>
    )
}


async function getTextureImageFile() {
    let images = [
        bgImage1,
        bgImage2,
        bgImage3,
        bgImage4,
        bgImage5,
        bgImage6,
        bgImage7,
        bgImage8
    ]
    return images[Math.floor(Math.random() * images.length)];
}
