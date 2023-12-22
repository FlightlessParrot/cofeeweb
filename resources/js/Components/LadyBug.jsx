import { Parallax } from "react-scroll-parallax";

export default function LadyBug({className}) {
  return (
    <div className={"rounded-full w-32 h-32 flex justify-center items-center bg-black overflow-hidden "+className} >
       <Parallax translateX={['-300px','300px']}><img className="w-14 h-14 -rotate-45 " width='320' height='281' src='/storage/general/ladybug_320_281.webp' alt='biedronka' /></Parallax> 
    </div>
  )
}