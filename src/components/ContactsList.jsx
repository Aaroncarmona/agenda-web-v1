import {useEffect, useState} from "react"
import {getAllContacts} from "../api/contacts.api";
import {ContactCard} from "./ContactCard";

export function ContactsList({filter, currentContact , setCurrentContact}) {

    const [contacts, setContacts] = useState([])

    useEffect(() => {

        async function loadContacts() {
            const res = await getAllContacts()
            setContacts(res.data)
        }

        loadContacts()
        console.log("pagina cargada")
    }, [currentContact])

    return (
        <div className="">
            {
                contacts
                    .filter(contact => {

                        if (filter == "" || filter == undefined) return true
                        return (contact.name.toLowerCase().includes(filter.toLowerCase()))
                            || (contact.email.toLowerCase().includes(filter.toLowerCase()))
                            || (contact.number.toLowerCase().includes(filter.toLowerCase()))
                    }).map(contact => (
                        <ContactCard key={contact.id} contact={contact} currentContact={currentContact} setCurrentContact={setCurrentContact} />
                    ))
            }
        </div>

    )
}