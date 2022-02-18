import React, {useEffect, useState} from 'react'
import Pause from "./Pause/Pause";
import Play from "./Play/Play";
import styles from "./Player.module.css"

function Player(props){
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio(props.audio))

    const handlePlayerClick = () => {
        setIsPlaying(!isPlaying);
    }

    useEffect(() => {
            isPlaying ? audio.play() : audio.pause();
        },
        [isPlaying]
    );
    useEffect(() => {
        audio.addEventListener('ended', () => setIsPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setIsPlaying(false));
        };
    }, []);

    return(
        <div>
            {
                !props.audio?
                    null
                    : <div className={styles.player} >
                        {isPlaying
                            ? <Pause onPlayerClick={handlePlayerClick} />
                            : <Play onPlayerClick={handlePlayerClick} />
                        }
                    </div>
            }
        </div>

    )
}


export default Player