import { InputText } from "primereact/inputtext";
export default function FloatInput({data, element, setData, label}) {
  return (
    <span className="p-float-label">
    <InputText className="w-full"  id={element} value={data[element]} onChange={(e) =>{setData(element, e.target.value)}} />
    <label htmlFor={element}>{label}</label>
</span>
  )
}