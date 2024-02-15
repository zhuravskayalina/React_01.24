import styles from './CloseConfirmation.module.scss'
import clsx from 'clsx'

interface CloseConfirmationProps {
  onConfirm: () => void
  onClose: () => void
}

const CloseConfirmation = ({ onClose, onConfirm }: CloseConfirmationProps) => {
  return (
    <>
      <p className={styles.text}>
        Are you sure you want to end game? <br /> No results will be saved.
      </p>
      <div className={styles.buttons}>
        <button className={clsx(styles.button, styles.button_confirm)} onClick={onConfirm}>
          Confirm
        </button>
        <button className={styles.button} onClick={onClose}>
          Cancel
        </button>
      </div>
    </>
  )
}

export default CloseConfirmation
