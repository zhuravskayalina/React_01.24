import { useState, useEffect } from 'react'
import clsx from 'clsx'
import styles from './Timer.module.scss'

interface TimerProps {
  seconds: number
}

const Timer = ({ seconds }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft: number) => {
        if (prevTimeLeft === 0) {
          clearInterval(interval)
          return 0
        }
        return prevTimeLeft - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <div>
      <h1 className={clsx(timeLeft <= 10 ? [styles.timer, styles.timer_warning] : styles.timer)}>
        Timer: {formatTime(timeLeft)}
      </h1>
    </div>
  )
}

export default Timer