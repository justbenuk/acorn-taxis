import { ReactNode } from "react"


//root, pay and lay out
export type LayoutProps = {
  children: ReactNode
}

//navigaton
export type MenuItemProp = {
  href: string,
  children: ReactNode
}

export type SideBarItemProps = {
  title: string,
  children: ReactNode
}
