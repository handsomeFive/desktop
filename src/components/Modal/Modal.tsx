import React from "react"
import ReactDOM from "react-dom"
import cn from "classnames"
import styles from "./styles.scss"

const modalRoot = document.getElementById("modal")

export default function Modal(props: any) {
  const { children, open, onClose } = props

  return ReactDOM.createPortal(
    <div className={cn(styles.modalWrapper, { [styles.open]: open })}>
      <div className={styles.modalMask} onClick={() => onClose && onClose()} />
      <div className={styles.modalBody}>{children}</div>
    </div>,
    modalRoot
  )
}
