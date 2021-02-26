import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)
  

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  const [isHover, setIsHover] = useState(false)

  function Over() {
    setIsHover(true)
  }

  function Out() {
    setIsHover(false)
  }

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
          Ciclo encerrado
          <img src="/icons/completed.svg" />
        </button>
      ) : (
        <>
          { isActive ? (
            <button
              onClick={resetCountdown}
              type="button"
              className={`${styles.countdownButtonActive} ${styles.countdownButtonFinished}`}
              onMouseOver={Over}
              onMouseOut={Out}
            >
              Abandonar ciclo
              {isHover ? (  
                <img src="/icons/cancel-white.svg" alt=""/>
              ) : (
                <img src="/icons/cancel.svg" alt=""/>
              )}
              
            </button>
          ) : (
            <button
              onClick={startCountdown}
              type="button"
              className={styles.countdownButton}
            >
              Iniciar um ciclo
              <img src="/icons/play_arrow.svg" alt=""/>
            </button>
          ) }
        </>
      ) }
      
    </div>
  )
}