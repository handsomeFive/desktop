export interface Application {
  id: string; // 应用id
  icon: string; // 应用图标
  isSingle: boolean; // 是否为单例
  type: "system" | "non-system"; // 应用类型
}

export interface ApplicationMenuItem {
  id: string;
  name: string;
  handleType: string;
  applicationId: string;
  subMenu: ApplicationMenuItem[];
}
