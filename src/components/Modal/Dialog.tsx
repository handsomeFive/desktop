import React, { useEffect, useState } from "react"
import ReactDom from "react-dom"
import Modal from "./Modal"

enum DialogType {
  menu = "menu",
  alert = "alert",
}

interface MenuConfig {
  x: number;
  y: number;
  menuList: [];
}

interface OpenConfig {
  type: DialogType;
  x?: number;
  y?: number;
}

let openDialog = (config: OpenConfig) => {}

function Dialog() {
  const [show, setShow] = useState(false)

  useEffect(function () {
    openDialog = (config: OpenConfig) => {
      setShow(true)
    }
  }, [])

  return <Modal open={show} />
}

if (typeof window !== "undefined") {
  const el = document.createElement("div")
  el.id = "dialog"
  document.body.appendChild(el)

  ReactDom.render(<Dialog />, el)
}

export default {
  menu: (config: MenuConfig) => {
    openDialog({ ...config, type: DialogType.menu })
  },
}
