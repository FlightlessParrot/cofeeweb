import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import '../../css/contact.css'
import Menu from "@/Components/Menu";
import OverBug from "@/Components/OverBug";
import GoogleMaps from "@/Components/GoogleMaps";
import TopMenuBar from "@/Components/TopMenuBar";


export default function Contact() {
  return (
    <div className="bg-coffee-red py-24 p-2 md:p-6 lg:p-24 min-h-screen overflow-x-hidden">
         <TopMenuBar />
        <Menu />
        <h1 className="font-bold  text-2xl m-4 border-black border-b  p-4">Skontaktuj się z nami</h1>  
        <OverBug />
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2  gap-12">
      
        <form className="flex-col flex gap-12 md:m-6 lg::m-20 ">
            <h2 className="m-4 text-lg font-bold">Wyślij nam wiadomość</h2>
        <span className="p-float-label">
            <InputText id='text' />
            <label htmlFor="text">Imię i nazwisko</label>
        </span>
        <span className="p-float-label">
            <InputText id='email' keyfilter={"email"} />
            <label htmlFor="email">adres e-mail</label>
        </span>
        <span className="p-float-label">
        <InputTextarea id='message' autoResize rows={5} cols={30} />
        <label htmlFor="message">Wiadomość</label>
        </span>
        <span>
            <button className="px-4 p-2 rounded bg-black hover:shadow-md hover:shadow-red-800 hover:scale-105  tracking-widest text-white"> <span className="pi pi-check"></span> Wyślij</button>
        
        </span>
        </form>
        <GoogleMaps /></div>
        <div className="m-6 my-12 md:m-24">
            <h2 className="text-xl m-4 md:m-8  font-bold">Znajdź nas na innych portalach</h2>
        <div className="flex gap-4 items-center">
            <a href='https://www.facebook.com/slodkizakatek.panibiedronka/'><span className="pi pi-facebook text-blue-500 hover:scale-105 bg-white rounded-xl transition-all p-2" style={{ fontSize: '2rem' }}></span></a> 
            <a href='https://www.instagram.com/slodkizakatek.panibiedronka'>
                <div className="hover:scale-105 bg-white rounded-xl transition-all p-2 block"><img className="w-8" src='/storage/general/instagram.png' alt='instagram icon' width={300} height={300}></img></div></a> 
        </div></div>
    </div>
  )
}