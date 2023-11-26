import { items } from "@/Data/menuItems";
import { Dock } from "primereact/dock";

export default function Menu() {
  
 return (
    <Dock model={items} position="right"   />
  )
}