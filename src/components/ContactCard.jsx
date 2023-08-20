import { useNavigate } from 'react-router-dom'

export function ContactCard( {contact , currentContact , setCurrentContact } ) {

    function TruncatedText({ text, maxLength }) {
        const truncatedText = text.length > maxLength
            ? text.slice(0, maxLength) + '...'
            : text;

        return <p className="text-slate-400 truncate">{truncatedText}</p>;
    }

    function TruncatedTextH1({ text, maxLength }) {
        const truncatedText = text.length > maxLength
            ? text.slice(0, maxLength) + '...'
            : text;

        return <p className="font-bold uppercase truncate">{truncatedText}</p>;
    }

    return (
        <div className='flex bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer'>


            { (currentContact.isSelected && currentContact.id === contact.id)  && <div className='bg-blue-300 w-2'></div> }
            { (currentContact.id !== contact.id) && <div className='w-2'></div> }
            
            <div
                className="flex-grow px-1 py-2"
                onClick={ () => {
                    let currentSelected = {
                        ... contact
                    }
                    currentSelected.isSelected = true
                    setCurrentContact(currentSelected)

                    { console.log("contract" , contact)}
                    { console.log("current" , currentSelected)}
                }}
            >
                <TruncatedTextH1 text={contact.name} maxLength={30}/>
                <TruncatedText text={contact.email} maxLength={30} />
                <TruncatedText text={contact.number} maxLength={30}/>
            </div>
        </div>
        
    )
}