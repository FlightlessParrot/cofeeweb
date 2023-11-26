import { animated, useSpring } from "@react-spring/web"
export default function AnimatedText({ children}) {
  const spring=useSpring({
    from: {
      x: -200,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    }
    })
  
  return (
    <animated.p style={spring} className="text-2xl text-center tracking-widest  ">{children}</animated.p>
  )
}