export default function ButtonRight({onClick, id}) {
  return (
    <button id={id} aria-label="Kliknij, aby pokazać kolejny obraz." onClick={onClick}><span style={{ fontSize: '6rem',  color: '#C73232' }}  className="pi pi-angle-right md:absolute top-2 md:top-[40%] right-[4rem] z-50"></span>   </button>
  )
}