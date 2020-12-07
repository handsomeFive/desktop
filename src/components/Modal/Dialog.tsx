import { ApplicationContextMenuItem } from "@/data/appliction/types"
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
  menuList: ApplicationContextMenuItem[];
}

interface OpenConfig {
  type: DialogType;
  x?: number;
  y?: number;
}

let openDialog = (config: OpenConfig) => {}

function Dialog() {
  const [show, setShow] = useState(false)
  const [config,setConfig] = useState()

  useEffect(function () {
    openDialog = (config: OpenConfig) => {
      setShow(true)
    }
  }, [])

  return (
    <Modal
      open={show}
      onClose={() => {
        setShow(false)
      }}
    ></Modal>
  )
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
