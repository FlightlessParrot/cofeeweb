import FormLayout from "@/Components/FormLayout";
import { Link, router, useForm } from "@inertiajs/react";
import { RadioButton } from "primereact/radiobutton";

import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import FloatInput from "@/Components/FloatInput";
import { Button } from "primereact/button";
import { useState } from "react";

import HappeningCard from "@/Components/HappeningCard";
export default function Admin({happenings}) {
    console.log(happenings)
    const { data, setData, post, processing, errors } = useForm({
        type: 'workshop',
        title: '',
        description: '',
        body: '',
        date: '',
        time: ''
    })
    const [value, setValue]=useState('workshop')
    const shortes = [
        {
            id: 0,
            element: 'title',
            label: 'Tytuł'
        },
        {
            id: 1,
            element: 'description',
            label: 'Krótki opis'
        },
        {
            id: 2,
            element: 'date',
            label: 'W jakie dni się odbywają? (duża czcionka obok zegara)'
        },
        {
            id: 3,
            element: 'time',
            label: 'W jakie godziny się odbywają? (mała czcionka obok zegara)'
        }
    ]
    const chosenEvents=happenings.filter(e=>e.type===value);
    function submitHandler(e)
    {
        e.preventDefault()
        post('/happening')
    }
    console.log(data)
    return (
        <div className="p-4">

            <h1 className="text-2xl m-12 ">Panel Administratora</h1>
            <Button onClick={()=>router.post('/logout')}>Wyloguj</Button>
            <form onSubmit={submitHandler} className="m-4 p-6 flex flex-col gap-4 border border-gray-200 rounded shadow w-max max-w-full min-w-[50vw]">
                <div className="m-4">
                    <h2 className="text-xl py-2 pr-24 border-b border-gray-200">Dodaj wydarzenie</h2>
                    <i className="text-sm">Pamiętaj, że maksymalnie możesz mieć 5 wydarzeń każdego typu.</i>
                </div>
                <FormLayout label='Typ'>

                    <div className="flex items-center">
                        <RadioButton inputId="workshop" name="workshop" value="workshop" onChange={(e) => setData('type', e.value)} checked={data.type === 'workshop'} />
                        <label htmlFor="workshop" className="ml-2">warsztaty</label>
                    </div>
                    <div className="flex items-center">
                        <RadioButton inputId="birthday" name="birthday" value="birthday" onChange={(e) => setData('type', e.value)} checked={data.type === 'birthday'} />
                        <label htmlFor="birthday" className="ml-2">urodziny</label>
                    </div>
                </FormLayout>
                <FormLayout label="Elementy opisowe" huge>
                    {shortes.map(e => <FloatInput key={e.id} {...e} data={data} setData={setData} />)}
                </FormLayout>
                <FormLayout label='Treść'>
                    <ReactQuill theme="snow" value={data.body} onChange={v => setData('body', v)} />
                    <Button className="flex justify-center my-6" >Utwórz mnie</Button>
                </FormLayout>
            </form>
            <div className="p-4 my-16 flex-col flex gap-8">
                <h2 className="text-xl py-2 pr-24 border-b border-gray-200">Wydarzenia</h2>
                <FormLayout label='Filtruj po typie'>

                    <div className="flex items-center">
                        <RadioButton inputId="workshop_2"  value="workshop" onChange={(e) => setValue( e.value)} checked={value === 'workshop'} />
                        <label htmlFor="workshop_2" className="ml-2">warsztaty</label>
                    </div>
                    <div className="flex items-center">
                        <RadioButton inputId="birthday_2"  value="birthday" onChange={(e) => setValue(e.value)} checked={value === 'birthday'} />
                        <label htmlFor="birthday_2" className="ml-2">urodziny</label>
                    </div>
                </FormLayout>
                <div className="flex flex-wrap gap-6">
                    {chosenEvents.map(e=><HappeningCard happening={e} key={e.id} />)}
                </div>
            </div>


        </div>
    )
}