import { useContext, useState, useEffect } from 'react'
import {CountdownContext} from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faChevronCircleRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export function Countdown(){
    const {minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown} = useContext(CountdownContext)
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    return (
        <div>
             <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            { hasFinished ? (
                <button 
                disabled
                className={styles.countdownButton}
            >
                <span>Ciclo encerrado  <FontAwesomeIcon color="var(--green)" icon={faCheckCircle} /></span>
            </button>
            ): (
                <> {isActive? (
                    <button 
                        type="button" 
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountdown}
                    >
                         <span>Abandonar ciclo  <FontAwesomeIcon icon={faTimesCircle} /></span>
                    </button>
                ) : (
                    <button 
                        type="button" 
                        className={styles.countdownButton}
                        onClick={startCountdown}
                    >
                        <span>Iniciar um ciclo  <FontAwesomeIcon color="var(--white)" icon={faChevronCircleRight} /></span>
                    </button>
                )}
                </>
            )}
        </div>
    )
}