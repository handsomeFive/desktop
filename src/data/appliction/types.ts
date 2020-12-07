export interface Application {
  id: string; // 应用id
  name: string; // 应用名字
  icon: string; // 应用图标
  isSingle: boolean; // 是否为单例
  type: "system" | "non-system"; // 应用类型
}

export interface ApplicationMenuItem {
  id: string; // 菜单id
  name: string; // 菜单title
  handleId: string; // 处理事件id
  applicationId: string; // 应用id
  subMenu: ApplicationMenuItem[]; // 子菜单
}

export interface ApplicationContextMenuItem {
  id: string;
  name: string;
  handleId: string;
  applicationId: string | null;
  subMenu: ApplicationMenuItem[];
}
