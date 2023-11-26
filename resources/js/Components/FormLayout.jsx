export default function FormLayout({ label, children, huge }) {
    return (

        <div className=" mt-2">
            <h3>{label}</h3>
            <div className={"flex-col flex " + (huge ? 'my-16 gap-14 m-4' : 'gap-4 m-4')}>
                {children}

            </div>
        </div>

    )
}