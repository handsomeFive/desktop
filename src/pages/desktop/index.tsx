import React, { useContext } from "react"
import { ThemeCtx, LanguageCtx } from "@/config/context/index.ts"

import styles from "./styles.scss"

export default function Desktop() {
  const { type, toggleTheme } = useContext(ThemeCtx)
  const ctx2 = useContext(LanguageCtx)
  return (
    <div
      className={styles.body}
      style={{ background: type === "dark" ? "#000" : "#fff" }}
      onClick={() => toggleTheme(type === "dark" ? "light" : "dark")}
    ></div>
  )
}
