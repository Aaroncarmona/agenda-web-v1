import { useEffect, useState } from "react"
import { getAllContacts } from "../api/contacts.api";
import { ContactCard } from "./ContactCard";
import { Container } from "postcss";


export function ContactsList ({filter, contact , setContact}) {
    
    const [ contacts , setContacts ] = useState([])
    
    useEffect ( () => {
        
        async function loadContacts() {
            const res = await getAllContacts()
            setContacts(res.data)
        }
        loadContacts()
        console.log("pagina cargada")
    } , [])

    return (
        <div className="flex flex-col"> 
            { 
                contacts
                    .filter(contact => {
                        
                        if ( filter == "" || filter == undefined ) return true
                        
                        return (contact.name.toLowerCase().includes(filter.toLowerCase()))
                         || (contact.email.toLowerCase().includes(filter.toLowerCase()))
                         || (contact.number.toLowerCase().includes(filter.toLowerCase()))

                        return true
                        
                    }).map(contact => (
                        <ContactCard key={contact.id} contact={contact}/>
                    ))
            }
        </div>
        
    )
}