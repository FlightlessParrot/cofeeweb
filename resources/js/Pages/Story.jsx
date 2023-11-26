import MovieText from "@/Layouts/MovieText";
import PinMe from "@/Layouts/PinMe";
import PinborderLayout from "@/Layouts/PinborderLayout";
import '../../css/welcome.css'
import { useReducer } from "react";
import { useSpring, animated, useSprings } from "@react-spring/web";
import AnimatedText from "@/Components/AnimatedText";
import ButtonRight from "@/Components/ButtonRight";
import ButtonLeft from "@/Components/ButtonLeft";
import { router } from "@inertiajs/react";
export default function Story() {
  const [spring, api] = useSpring(
    () => ({
      from: { x: -1000, y: 700, opacity: 0, },
      to: { x: 0, y: 0, opacity: 1 }
    }))

  const [state, dispatch] = useReducer(reducer, { counter: 0 })

  function reducer(state, action) {
    console.log(action)
    api.start({ from: { x: -1000, y: 700, opacity: 0 }, to: { x: 0, y: 0, opacity: 1 } })
    if (action === 'prev' && state.counter > 0) {
      return { counter: state.counter - 1 }
    }
    if ((action === 'prev' && state.counter === 0)) {
      router.get('/')
    }
    if (action === 'next' && state.counter >= 10) {
      router.get('/offer')
    }
    if (action === 'next' && state.counter < 10) {


      return { counter: state.counter + 1 }
    }
    return { ...state }
  }
  function clickHandler(e) {
    const id = e.currentTarget.id
    console.log(e.currentTarget.id)


    api.start(
      {
        from: { x: 0, y: 0, opacity: 1 },
        to: { x: 1000, y: 700, opacity: 0 },
        onResolve: () => {
          dispatch(id);
        }
      }
    )
  }
  const imageClass = ' md:max-w-[80vw] md:max-h-[80vh]'
  console.log(spring)
  return (
    <div className="w-screen h-screen overflow-clip  " id='story'>
      <div className="flex justify-around my-6 md:my-0 md:block">
        <ButtonLeft id='prev' onClick={clickHandler} />
        <ButtonRight id='next' onClick={clickHandler} />
      </div>

      <PinborderLayout>
        <PinMe className=' absolute top-[10%] right-[10%]'>
          {(state.counter === 0 || state.counter === 6) && <animated.img key={0} style={spring} src='/storage/general/castle_1122_858.webp' alt='rysunek zamku' width='1122' height='858' className={imageClass} />}
          {state.counter === 1 && <animated.img style={spring} src='/storage/general/pincess_friends_1122_858.webp' alt='rysunek księżniczki i jej rodziny' width='1122' height='858' className={imageClass} />}
          {(state.counter === 2 || (state.counter == 5)) && <animated.img style={spring} src='/storage/general/dark_castle-1122_858.webp' alt='rysunek mrocznego zamku' width='1122' height='858' className={imageClass} />}
          {state.counter === 3 && <animated.img style={spring} src='/storage/general/princes_and_witch-1122_859.webp' alt='rysunek złej wiedźmy' width='1122' height='859' className={imageClass} />}
          {state.counter === 4 && <animated.img style={spring} src='/storage/general/misfortune_1122_788.webp' alt='rysunek smutnych ludzi' width='1122' height='788' className={imageClass} />}
          {state.counter === 7 && <animated.img style={spring} src='/storage/general/lady_bug_1122_788.webp' alt='rysunek Pani Bierdronki' width='1122' height='788' className={imageClass} />}
          {state.counter === 8 && <animated.img style={spring} src='/storage/general/room_1920_1080.webp' alt='zdjęcie kawiarni Pani Biedronki' width='1920' height='1080' className="md:max-w-[60vw] max-h-[80vh] " />}
          {state.counter === 9 && <animated.div style={spring} className='w-[50vw] md:w-[30vw] h-40 lg:h-80 xl:h-[80vh] flex justify-center items-center bg-white '><strong className="text-2xl lg:4xl xl:text-9xl text-bold text-red-300">KONIEC</strong></animated.div>}
        </PinMe>
      </PinborderLayout>
      <MovieText>
        {state.counter == 0 && <AnimatedText > Dawno temu w odleglej krainie w ladnym zamku zyla sobie pienkna ksierzniczka.</AnimatedText>}
        {state.counter == 1 && <AnimatedText >Ksiezniczka bawila sie caly czas z mamom, tatom, ciociom i wujkiem.</AnimatedText>}
        {state.counter == 2 && <AnimatedText >POTEM STALO SIE COS STRASZNEGO  </AnimatedText>}
        {state.counter == 3 && <AnimatedText >PRZYBYLA ZLA WIEDZMIA NUDA I RZUCILA STRASZNOM KLOTWE</AnimatedText>}
        {state.counter == 4 && <AnimatedText >Od teras dorosli musieli sie bawic samI i dzieci mUsialy sie BawIc sAme.</AnimatedText>}
        {state.counter == 5 && <AnimatedText >I wszyscy mysleli ze ZAWSZE tak juz bendzie.</AnimatedText>}
        {state.counter == 6 && <AnimatedText >Pewnego dnia suonce znowu zaswiecilo nad zamkiem ksierzniczki.</AnimatedText>}
        {state.counter == 7 && <AnimatedText >Do ksiezniczki przybyla dobra pani Biedronka.</AnimatedText>}
        {state.counter == 8 && <AnimatedText >Pani Biedronka opowiedziaua o magicznej komnacie, gdzie zua Nuda nie ma wstepu. Rodzice i dzieci milo spendzaja czas i wszyscy sa szczesliwi.Teraz ksiezniczka z mamom i tatom chodzom do Pani Biedronki bardzo czensto. Tata i Mam pijom dobrom kafe a ksiezniczka robi prafdziwe renkodziela</AnimatedText>}
      </MovieText>

    </div>
  )
}