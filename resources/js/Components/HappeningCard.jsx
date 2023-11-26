import { Link, router } from "@inertiajs/react";
import { Card } from "primereact/card";
import Upload from "./Upload";
import { Button } from "primereact/button";

export default function HappeningCard({happening}) {
    const clickhandler=e=>{
        e.preventDefault();
        router.delete('/happening/'+happening.id)
    }
    return (
        <Card key={happening.id} title={happening.title} className="w-fit max-w-full">
            <Link className="block my-12" href={'/offer/' + happening.type + '/happening/' + happening.id}>
                <span className='text-blue-600 underline'>Zobacz podgląd</span>
            </Link>
            <Upload  happeningId={happening.id} imagePath={happening.image} />
            <Button severity="danger" onClick={clickhandler} >Usuń</Button></Card>
    )

}