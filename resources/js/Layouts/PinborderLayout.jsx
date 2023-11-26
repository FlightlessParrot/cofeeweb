export default function PinborderLayout({children}) {
  return (
    <div className="md:w-screen md:h-screen flex justify-center">
    <div className="w-fit h-fit relative top-0">
        <img src='/storage/general/pinboard-1564_1074.webp' alt='tło - tablica korkowa' width='1564' height='1074' className="max-w-screen max-h-screen "/>
        {children}
    </div></div>
  )
}