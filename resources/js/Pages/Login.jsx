import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useForm } from "@inertiajs/react";
import { Password } from "primereact/password";
export default function Login(props) {
    const { data, setData, post, processing, errors } = useForm({
        email:'',
        password: ''
    })
    console.log(props)
    function submitHandler(e)
    {
        e.preventDefault()
        post('/login')
    }
    return (

        <div className="min-w-screen min-h-screen flex justify-center items-center bg-coffee-red">
            <form onSubmit={submitHandler} className="bg-white rounded p-12 flex flex-col gap-4">
                <h1 className="text-xl text-bold mb-6">Logowanie</h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="username">Login</label>
                    <InputText autoComplete="username" value={data.email} onChange={e => setData('email', e.target.value)} name='email' id="username" aria-describedby="username-help" />
                    <small id="username-help">
                        Wpisz swój login
                    </small>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Hasło</label>
                    <Password autoComplete="current-password" value={data.password} onChange={e => setData('password', e.target.value)} name='password' id="password" aria-describedby="password-help" />
                    <small id="password-help">
                        Podaj hasło
                    </small>
                </div>
                <Button className="w-fit self-end" >Zaloguj</Button>
            </form>

        </div>
    )
}