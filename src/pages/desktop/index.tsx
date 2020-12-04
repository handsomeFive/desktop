import React, { useEffect, useState } from "react"
import TaskBar from "./components/TaskBar"
import WorkSpace from "./components/WorkSpace"
import { ClientCtx } from "@/config/context/client"
// import { ThemeCtx, LanguageCtx } from "@/config/context/index.ts"

import styles from "./styles.scss"

export default function Desktop() {
  const [height, setHeight] = useState(document.documentElement.clientHeight)
  const [width, setWidth] = useState(document.documentElement.clientWidth)
  const handleResize = function () {
    const { width, height } = document.documentElement.getBoundingClientRect()
    setWidth(() => width)
    setHeight(() => height)
  }

  useEffect(function () {
    window.addEventListener("resize", handleResize)
    window.addEventListener("contextmenu", (e) => e.preventDefault())
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className={styles.desktop}>
      <ClientCtx.Provider value={{ width, height }}>
        <TaskBar />
        <WorkSpace height={height - 24} />
      </ClientCtx.Provider>
    </div>
  )
}
