import Dialog from "@/components/Modal/Dialog"
import { ApplicationContextMenuItem } from "@/data/appliction/types"
import React, { useEffect, useRef } from "react"

interface Props {
  height: number;
}

const contextMenu: ApplicationContextMenuItem[] = [
  {
    id: "workspace_contextmenu_1",
    name: "刷新",
    handleId: "handleId_workspace_contextmenu_refresh",
    subMenu: [],
    applicationId: null,
  },
]

export default function WorkSpace(props: Props) {
  const workspaceRef = useRef<HTMLDivElement>(null)
  const { height } = props

  useEffect(function () {
    if (workspaceRef.current) {
      workspaceRef.current.addEventListener("contextmenu", function (
        e: MouseEvent
      ) {
        const { pageX, pageY } = e
        Dialog.menu({ x: pageX, y: pageY, menuList: contextMenu })
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
