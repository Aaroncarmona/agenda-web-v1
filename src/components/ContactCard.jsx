import { useNavigate } from 'react-router-dom'

export function ContactCard( {contact} ) {

    const navigate = useNavigate()

    if ( contact.id == 3 ) contact.isSelected = true

    return (
        <div className='flex bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer'>
            
            { contact.isSelected && <div className='bg-blue-300 w-2'></div> }
            { !contact.isSelected && <div className='w-2'></div> }
            
            <div
                className="flex-grow pl-3 pt-3 pb-3"
                onClick={ () => {
                    navigate(`/contacts/${contact.id}`)
                }}
            >
                <h1 className="font-bold uppercase">{contact.name}</h1>
                <p className="text-slate-400">{contact.email}</p>
                <p className="text-slate-400">{contact.number}</p>
            </div>
        </div>
        
    )
}