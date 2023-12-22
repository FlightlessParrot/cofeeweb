import useMakeTrail from '@/Hooks/useMakeTrail'
import '../../css/welcome.css'
import { useSpring,animated } from '@react-spring/web'
import { Link } from '@inertiajs/react'
import Menu from '@/Components/Menu'
import TopMenuBar from '@/Components/TopMenuBar'
export default function Welcome() {
   
    const text=[
        'Czy znasz bajke o Biedronce i zuej wiedzmie?',
        'Opowiemy Ci'
    ] 
    const [spring, api]= useSpring(
        ()=>({
            from: {x: -30,opacity: 0, y:0, scale: [1,1,1]},
            to: {x: 0, opacity: 1, y:0, scale: [1,1,1]},  
            delay: 7000
        })
    )

    const header=useMakeTrail({text:text[0], delay: 500})
    const par=useMakeTrail({text:text[1], delay: 6000})

    return (
        <div className="overflow-hidden relative top-0 h-screen w-screen" id='welcome'>
             <TopMenuBar />
            <Menu />
         <video className='absolute min-h-[100vh] min-w-[100vw] object-cover top-0' muted autoPlay >
            <source   src='/storage/general/pexels-artem-podrez.mp4'  type="video/mp4"></source> 
         </video>


        <animated.div style={spring} className={'absolute top-[10%] left-[30%] z-30 w-fit h-fit'}   >
            <Link href='/story'>
            <img  className=' max-h-[50vh] max-w-[50vw]  w-full h-full object-contain' src='/storage/general/photo-book_1280.webp' width={1280} height={1022} />
            </Link></animated.div>
        <div className='w-full bg-black bg-opacity-50 text-white absolute bottom-0 z-10 p-12' >
        <h1 className='text-2xl m-6'>{
        header
        }</h1>
        <p className='mr-6 m-4 text-lg'>{par}</p>
        
        </div>
        </div>
    )
}