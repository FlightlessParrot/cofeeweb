import Menu from "@/Components/Menu";

export default function Header({ imgUrl, children }) {
    const classes = `w-screen h-screen relative top-0 overflow-clip relative top-0 bg-[url(${imgUrl})] `
    return (
     <div className={classes}>
        <img className='object-cover w-full h-full absolute top-0 ' src={imgUrl} alt='assssssssssssss' />
            <Menu />
            <div className="bg-black bg-opacity-50 w-full absolute bottom-0 pb-32 p-6">
                {children}
            </div>
        </div>
    )
}

