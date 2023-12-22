import Header from "@/Components/Header";
import LadyBug from "@/Components/LadyBug";

import OfferItem from "@/Components/OfferItem";
import OverBug from "@/Components/OverBug";
import RedCard from "@/Components/RedCard";
import TopMenuBar from "@/Components/TopMenuBar";


export default function Offer(props) {
  const data=[
    {
      id: 0,
      myClass:'relative md:left-[20%]'
    },
    {
      id: 1,
      myClass:'relative md:left-[10%]',
      
    },
    {
      id: 2,
      myClass:'relative md:left-[15%]',
      
    },
    {
      id: 3,
      myClass:'relative md:left-[20%]',
      
    },
    {
      id: 4,
      myClass:'relative md:left-[60%]',
      
    },
  ]
  const happ=props.happenings.filter((e,i)=>i<5)
  const dots=happ.map((e,i)=><OfferItem id={e.id} title={e.title} type={e.type} description={e.description} date={e.date} imgUrl={e.image ? e.image :'/storage/general/children-600_452.webp'} className={data[i].myClass} />)
  const moreHapp=props.happenings.filter((e,i)=>i>4);
  const secDoc=moreHapp.map(e=><OfferItem id={e.id} title={e.title} type={e.type} description={e.description} date={e.date} imgUrl={e.image ? e.image :'/storage/general/children-600_452.webp'}></OfferItem>)
  return (
    <div className="bg-coffee-red w-[99vw] overflow-clip">
       <TopMenuBar />
      <Header imgUrl={'/storage/general/coffee_1920_1355.webp'}>
        <h1 className="text-white text-2xl mb-6">Poznaj naszą <span className="text-red-400">{props.titleSpan}</span> </h1>
        <p className="text-white text-lg">Podczas, gdy Państwo będziecie mogli przy relaksującej muzyce napić się kawy, zjeść pyszny kawałek ciasta.
          Państwa dziecko wraz z <span className="text-red-400">Panią Biedronką</span> przeniesie się do krainy twórczości.
          Kreatywnie spędzi czas, w którym swoje dzieło zabierze do domu lub obdaruje nim ukochaną Babcię.</p>
      </Header>
      <RedCard>
        {dots[0] }
        <OverBug />
        <LadyBug className={'relative top-0 left-[30%]'} />
        {dots[1] }
        <LadyBug className={'relative top-4 left-[10%] rotate-12'} /> <LadyBug className={'relative top-0 md:left-[70%] rotate-45'} />
       {dots[2]}
       {dots[3]}
        <LadyBug id='1' className={'relative top-4 left-[15%] rotate-20'} /> <LadyBug className={'relative right-[10%] rotate-90'} />
        {dots[4]}
        <LadyBug className={'relative top-4 left-[8%] rotate-90'} /> <LadyBug className={'relative md:bottom-[20%] rotate-90'} />
        {...secDoc}
      </RedCard>
    </div>

  )
}