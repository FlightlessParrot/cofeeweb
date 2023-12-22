import { Link } from "@inertiajs/react"
import { useState } from "react"


export default function OfferItem({imgUrl, title,description, date, className,id, type}) {
  const [show, setShow]=useState(false)

  return (
    <Link href={'/offer/'+type+'/happening/'+id}  className={"flex items-center w-full gap-4 my-6 "+className} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        <div className={`w-40 h-40 border-black  border-8 rounded-full relative top-0 overflow-clip transition-all  `}>
          <img src={imgUrl} alt='tło' className="absolute top-0 object-cover w-full h-full z-0" width='250' height='250' />
        <div className={"text-white h-full w-full flex items-center justify-center transition-all font-bold relative top-0  p-2  "+(show ? 'bg-black bg-opacity-50':'')}>
         {!show && <h3 className="text-base">{title}</h3>}
         {show && <p className="text-sm truncate">{description}</p>}
        </div>
        </div>
        <span className="text-2xl text-white">{date}</span>
    </Link>
  )
}