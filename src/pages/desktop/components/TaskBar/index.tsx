import { ClientCtx } from "@/config/context/client"
import React, { useContext } from "react"
import styles from "./styles.scss"
import Icon from "react-fontawesome"
import MenuBar from "../MenuBar"
import SystemBar from "../SystemBar"

export default function TaskBar() {
  const { width, height } = useContext(ClientCtx)

  return (
    <header className={styles.taskBar}>
      <Icon name="apple" className={styles.icon} />
      <div className={styles.functionBar}>
        <MenuBar></MenuBar>
        <SystemBar></SystemBar>
      </div>
    </header>
  )
}
