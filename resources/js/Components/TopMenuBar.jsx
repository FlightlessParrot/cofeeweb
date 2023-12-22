import { items } from "@/Data/menuItems"
import { Link } from "@inertiajs/react"

export default function TopMenuBar() {
    const menuLinks=items.map(e=><Link key={e.id} href={e.url}>{e.label}</Link>)
  return (
    <div className="w-[99vw] absolute top-0 gap-2 sm:gap-4 md:gap-8 z-50 top-menu bg-coffee-red bg-opacity-70 text-black p-4 flex ">{menuLinks}</div>
  )
}