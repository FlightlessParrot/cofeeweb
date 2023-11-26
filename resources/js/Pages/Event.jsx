import Header from "@/Components/Header";
import RedCard from "@/Components/RedCard";
import LadyBug from "@/Components/LadyBug";
import OverBug from "@/Components/OverBug";
import TopMenuBar from "@/Components/TopMenuBar";
export default function Event({happening}) {
  return (
    <div className="bg-coffee-red">
      <TopMenuBar />
    <Header imgUrl={'/storage/general/room_1920_1080.webp'}>
         <h1 className="text-white text-2xl mb-6">{happening.title} </h1>
        <p className="text-white text-lg">{happening.description}</p>
    </Header>
    <RedCard>
      <OverBug />
      <div className="my-25 md:m-24 border-b border-black p-4 md:p-12">
      <section  dangerouslySetInnerHTML={{__html: happening.body}}></section>
      </div>
    <LadyBug className={'relative top-4 left-[10%] rotate-12'} /> <LadyBug className={'relative top-0 md:left-[70%] rotate-45'} />
    <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
        <img src='/storage/general/clock-640_640.webp' alt='rysunek zegara' width='640px' height='640px' className="w-32 md:w-60" /> 
        <div className="pr-24">
            <h2 className="text-xl">{happening.date}</h2>
            <p> {happening.time} </p>
            <p>Tylko w naszej biedronkowej kawiarni!!!</p>
        </div>
    </div>
    <LadyBug className={'relative top-4 left-[10%] rotate-12'} /> <LadyBug className={'relative top-0 md:left-[70%] rotate-45'} />
    </RedCard>
    </div>
  )
}