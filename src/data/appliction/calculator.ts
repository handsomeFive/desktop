import { Application, ApplicationMenuItem } from "./types"

const menu: ApplicationMenuItem[] = [
  {
    id: "",
    name: "",
    handleId: "",
    applicationId: "",
    subMenu: [],
  },
]
const config: Application = {
  id: "",
  name: "计算器",
  icon: "",
  type: "system",
  isSingle: true,
}
const contextMenu:ApplicationMenuItem[] = []

export default { menu, config, contextMenu }
