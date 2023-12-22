
import React, { useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { useForm } from '@inertiajs/react';

export default function Upload({happeningId, imagePath}) {
    const toast = useRef(null);

 
    const { data, setData, post, progress } = useForm({
        image: null,
      })
      useEffect(
        ()=>{
            if(progress>=100)
            {
                toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' }); 
            }
        },[progress, toast]
      )
      function submit(e) {
        
        setData('image',e.files[0])
        post('/happening/'+happeningId+'/upload')
       
      }
    return (
        <div className="my-12 flex flex-col sm:flex-row gap-8 items-center">
            <div className={`w-40 h-40 border-gray-5 border-2 rounded-full relative top-0 shrink-0 overflow-clip transition-all `}>
          <img src={imagePath ? imagePath : 'storage/general/children-600_452.webp'} alt='tło' className="absolute top-0 object-cover w-full h-full z-0" width='250' height='250' />
        </div>
            <Toast ref={toast}></Toast>
     
            <FileUpload className='w-full' mode="basic" name="image" url={""} accept="image/*" maxFileSize={1000000}  customUpload uploadHandler={submit} chooseLabel="Dodaj ikonę" />
        </div>  
    )
}