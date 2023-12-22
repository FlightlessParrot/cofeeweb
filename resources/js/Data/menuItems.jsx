import { Link } from "@inertiajs/react";
import { Chip } from "primereact/chip";

export const items=[
    {
        id:0,
        label: 'Bajka o biedronce',
        icon: <span className="pi pi-bookmark-fill bg-white p-2 rounded-md bg-opacity-80 cursor-pointer}" style={{ fontSize: '1.6rem',  color: '#C73232' }}></span>,
        url: '/',
        template: ({label, icon, url})=><Link href={url}><div className='group'><Chip label={label} className="hidden group-hover:inline-block w-max absolute right-12"></Chip>{icon} </div></Link>
      
    },
    {
        id:1,
        label: 'Oferta warsztatowa',
        icon: <span className="pi pi-heart-fill bg-white p-2 rounded-md bg-opacity-80 cursor-pointer}" style={{ fontSize: '1.6rem',  color: '#C73232' }}></span>,
        url: '/offer/workshop',
        template: ({label, icon, url})=><Link href={url}><div className='group'><Chip label={label} className="hidden group-hover:inline-block w-max absolute right-12"></Chip>{icon} </div></Link>
    },
    {
        id:2,
        label: 'Oferta urodzinowa',
        icon: <span className="pi pi-heart-fill bg-white p-2 rounded-md bg-opacity-80 cursor-pointer}" style={{ fontSize: '1.6rem',  color: '#C73232' }}></span>,
        url: '/offer/birthday',
        template: ({label, icon, url})=><Link href={url}><div className='group'><Chip label={label} className="hidden group-hover:inline-block w-max absolute right-12"></Chip>{icon} </div></Link>
    },
    {
        id:3,
        label: 'Kontakt',
        icon: <span className="pi pi-circle-fill bg-white p-2 rounded-md bg-opacity-80 cursor-pointer}" style={{ fontSize: '1.6rem',  color: '#C73232' }}></span>,
        url: '/contact',
        template: ({label, icon, url})=><Link href={url}><div className='group'><Chip label={label} className="hidden group-hover:inline-block w-max absolute right-12"></Chip>{icon} </div></Link>
    }
]