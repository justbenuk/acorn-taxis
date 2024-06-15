import { SideBarItemProps,} from "@/types"
export default function SideBarItem({title, children}: SideBarItemProps) {
  return (
    <div className="text-gray-200 p-4">
      <h1 className="text-2xl underline underline-offset-8 text-yellow-500">{title}</h1>
      <div className="mt-4">{children}</div>
      <hr className="mt-4"/>
    </div>
  )
}
