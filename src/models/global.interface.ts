export interface iIcon {
  type: string;
  theme: "filled" | "outlined" | "twoTone" | undefined;
}

export interface iRoute {
  name: string,
  routes?: iRoute[];
  path?: string;
  component?: any;
}