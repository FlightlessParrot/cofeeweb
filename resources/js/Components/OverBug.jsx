import { Parallax } from "react-scroll-parallax"

export default function OverBug() {
  return (
    <Parallax speed={-20} translateX={['0px','500px']}><img className="w-20 " width='320' height='281' src='/storage/general/ladybug_320_281.webp' alt='biedronka' /></Parallax> 
  )
}