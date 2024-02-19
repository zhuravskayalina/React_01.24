import clsx from 'clsx'
import styles from './Timer.module.scss'

interface TimerProps {
  seconds: number
}

const Timer = ({ seconds }: TimerProps) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <div>
      <h1 className={clsx(seconds <= 10 ? [styles.timer, styles.timer_warning] : styles.timer)}>
        {formatTime(seconds)}
      </h1>
    </div>
  )
}

export default Timer
