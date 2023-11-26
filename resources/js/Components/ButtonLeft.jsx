export default function ButtonLeft({onClick, id}) {
    return (
      <button id={id} aria-label="Kliknij, aby pokazać kolejny obraz." onClick={onClick}><span style={{ fontSize: '6rem',  color: '#C73232' }}  className="pi pi-angle-left md:absolute top-2 md:top-[40%] left-[4rem] z-50"></span>   </button>
    )
  }