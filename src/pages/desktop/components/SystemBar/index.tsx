import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import styles from "./styles.scss"

function useClock() {
  const [time, setTime] = useState(+new Date())

  useEffect(function () {
    const timer = window.setInterval(function () {
      setTime(() => +new Date())
    }, 1000)
    return () => {
      window.clearInterval(timer)
    }
  }, [])

  return time
}

export default function SystemBar() {
  const time = useClock()
  return (
    <div>
      <span className={styles.bar}>
        {dayjs(time).format("MM月DD日  HH:mm")}
      </span>
    </div>
  )
}
