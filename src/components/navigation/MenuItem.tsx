'use client'
import Link from "next/link"
import { MenuItemProp } from "@/types"
import { usePathname } from "next/navigation"
export default function MenuItem({ href, children }: MenuItemProp) {
  //get the path name
  const path = usePathname()

  return (
    <Link href={href} className={path === href  ? 'underline decoration-yellow-600 decoration-2 underline-offset-8' : ''}>{children}</Link>
  )
}
