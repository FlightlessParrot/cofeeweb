import {useTrail, animated} from '@react-spring/web'

export default function useMakeTrail({text, delay}) {
    const trail=useTrail(
        text.length,{
            from: {opacity: 0},
            to: {opacity: 1},
            delay: delay
        }
    )
    const trailer=trail.map((e,i)=><animated.span key={i} style={e}>{text[i]}</ animated.span>)
  return trailer
    }