
export default function PinMe({children, className}) {
  return (
    <div className={"w-fit h-fit  "+className}>
        <img src="/storage/general/red_pin-101_124.webp" alt='pinezka' width='101' height='124' className="w-12 absolute top-2 right-[50%] z-50" />
        {children}</div>
  )
}