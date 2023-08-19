import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { createContact, deleteContact, getContact, updateContract } from '../api/contacts.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { PencilIcon , ClipboardDocumentIcon , TrashIcon } from '@heroicons/react/24/outline'



export function ContactsFromPage({id , setId}) {

    const navigate = useNavigate()    

    const { register , handleSubmit, 
        formState : { errors} , 
        setValue ,
        getValues
    } = useForm()
        
    const onSubmit = handleSubmit( async data => {
                
        if ( id ) {
            const res = await updateContract(id , data)
            toast.success("Contacto actualizado" , {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        } else {        
            const res = await createContact(data)
            toast.success("Contacto guardado" , {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        }
        navigate("/contacts")
    })

    useEffect( () => {
        async function loadContacts () {
            if ( id ) {
                const res = await getContact(id)
                setValue('name' , res.data.name)
                setValue('email' , res.data.email)
                setValue('number' , res.data.number)
            }
        }
        loadContacts()

        
    }, [])

    const handleCopyValueFrom =  (nameField => {
        console.log("handleCopy")
        const text = getValues(nameField)
        console.log(text)
        navigator.clipboard.writeText(text);
        toast.success(`Copy ${text}` , {
            position: "bottom-right",
            style: {
                background: "#101010",
                color: "#fff"
            }
        })
    })
    

    return (
        <div className="flex h-screen flex-col">
            
            <div className='flex-grow overflow-y-auto'>
                
                <div className='p-3'>

                    <h1
                        className='text-gray-400 text-lg font-normal mb-1'
                    >Información</h1>

                    <form onSubmit={onSubmit} id='form-create-contact'>

                        <div className="bg-zinc-700 p-3 block w-full mb-3">

                            
                            <label className="block text-gray-400 text-sm font-medium">
                                Nombre
                            </label>

                            <div className='flex'>

                                <input className="bg-zinc-700 m-0 p-0 w-full inline"
                                    type="text" {...register("name", { required: true })} />    

                                <ClipboardDocumentIcon 
                                    className="h-6 w-6 text-gray-400 inline cursor-pointer ml-3" 
                                    onClick={ () => {
                                        handleCopyValueFrom("name")
                                        } 
                                    }
                                    />

                            </div>

                            {errors.name && <span className='text-red-400'>Sin información</span> }


                            <label className="block text-gray-400 text-sm mt-3 font-medium">
                                Correo
                            </label>

                            <div className='flex'>

                                <input className="bg-zinc-700 m-0 p-0 w-full inline"
                                    type="text" {...register("email", { required: true })} />    

                                <ClipboardDocumentIcon 
                                    className="h-6 w-6 text-gray-400 inline cursor-pointer ml-3" 
                                    onClick={ () => {
                                        handleCopyValueFrom("email")
                                        } 
                                    }
                                    />

                            </div>

                            {errors.email && <span className='text-red-400'>Sin información</span> }

                            <label className="block text-gray-400 text-sm mt-3 font-medium">
                                Número
                            </label>

                            <div className='flex'>

                                <input className="bg-zinc-700 m-0 p-0 w-full inline"
                                    type="text" {...register("number", { required: true })} />    

                                <ClipboardDocumentIcon 
                                    className="h-6 w-6 text-gray-400 inline cursor-pointer ml-3" 
                                    onClick={ () => {
                                        handleCopyValueFrom("number")
                                        } 
                                    }
                                    />

                            </div>

                            {errors.number && <span className='text-red-400'>Sin información</span> }


                        </div>

                    </form>
                </div>
            </div>


            <div className='flex-grow-0'>

                <div className='flex justify-start bg-zinc-700 px-3 py-1'>
                    
                    <button 
                        className='bg-zinc-800 p-2 rounded-lg'
                        form='form-create-contact'>
                        <PencilIcon className="w-6 h-6 text-blue-500" />        
                    </button>
                
                    { id && 
                        <button
                            className='bg-zinc-800 p-2 rounded-lg ml-1'
                            onClick={ async () => {
                                const accepted = window.confirm("¿Estas seguro?")
                                if ( accepted ) {
                                    await deleteContact(id)
                                    navigate("/contacts")
                                }
                            }}>
                            <TrashIcon className="w-6 h-6 text-red-500" />        
                        </button> 
                    }
                </div>

                

            </div>


        </div>
    )
}