import Dialog from "@/components/Modal/Dialog"
import Modal from "@/components/Modal/Modal"
import React, { useEffect, useRef } from "react"

interface Props {
  height: number;
}

export default function WorkSpace(props: Props) {
  const workspaceRef = useRef<HTMLDivElement>(null)
  const { height } = props

  useEffect(function () {
    if (workspaceRef.current) {
      workspaceRef.current.addEventListener("contextmenu", function (
        e: MouseEvent
      ) {
        const { pageX, pageY } = e
        Dialog.menu({ x: pageX, y: pageX })
      })
    }
    return () => {}
  }, [])
  return (
    <>
      <div style={{ height }} ref={workspaceRef} />
    </>
  )
}
