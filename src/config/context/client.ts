import React from "react"

interface Client {
  readonly width: number;
  readonly height: number;
}

const client: Client = {
  width: 0,
  height: 0,
}

export const ClientCtx = React.createContext<Client>(client)
