import styles from './Modal.module.scss'
import closeIcon from '../../assets/icons/close.svg'
import { ReactElement } from 'react'
import { useSpring, animated } from '@react-spring/web'

interface ModalProps {
  children: ReactElement
  isOpen: boolean
  disableClose: boolean
  onClose?: () => void
}

const Modal = ({ children, isOpen, onClose, disableClose }: ModalProps) => {
  const springs = useSpring({
    transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
    config: {
      duration: 300
    }
  })
  return (
    isOpen && (
      <div className={styles.overlay} onClick={onClose} role="presentation">
        <animated.div
          style={springs}
          className={styles.wrapper}
          onClick={(e) => e.stopPropagation()}
          role="presentation">
          <div className={styles.content}>
            {!disableClose && (
              <button className={styles.close} onClick={onClose}>
                <img src={closeIcon} alt="close" />
              </button>
            )}
            {children}
          </div>
        </animated.div>
      </div>
    )
  )
}

export default Modal
