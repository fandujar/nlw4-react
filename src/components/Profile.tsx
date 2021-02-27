import styles from '../styles/components/Profile.module.css'
import {useContext} from 'react';
import {ChallengesContext} from '../contexts/ChallengesContext'


interface profileProps {

}

export function Profile(props: profileProps) {
    const {level} = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/fandujar.png" alt="Filipe Andujar"/>
            <div>
                <strong>Filipe Andujar</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}