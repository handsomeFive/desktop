import calculator from "./calculator"

const applicationList = [calculator.config]

const menuMap = {
  [calculator.config.id]: calculator.menu,
}
const contextMenuMap = {
  [calculator.config.id]: calculator.contextMenu,
}
export { applicationList, menuMap, contextMenuMap }
