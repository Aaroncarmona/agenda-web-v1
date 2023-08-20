import {ContactsList} from '../components/ContactsList'
import {NavigationCreate} from '../components/NavigationCreate'
import {Navigation} from '../components/Navigation'
import {useState} from 'react'
import {ContactsFromPage} from './ContactsFormPage'

export function ContactsPage() {

    const [filtro, setFiltro] = useState('')
    const [currentContact, setCurrentContact] = useState({})

    return (
        <div className="flex flex-row w-full">
            <div className="flex basis-1/4 p-0 m-0 w-full">
                <div className="flex flex-col h-screen w-full">
                    <Navigation filter={filtro} setFilter={setFiltro}/>
                    <div className="flex-grow overflow-y-auto scrollbar-transparent-gray ">
                        <ContactsList filter={filtro} currentContact={currentContact}
                                      setCurrentContact={setCurrentContact}/>
                    </div>
                    <div className="flex-grow-0 w-full">
                        <NavigationCreate currentContact={currentContact} setCurrentContact={setCurrentContact}/>
                    </div>
                </div>

            </div>
            <div className="flex basis-3/4 w-full">
                <div className="w-full mx-auto">
                    <ContactsFromPage currentContact={currentContact} setCurrentContact={setCurrentContact}/>
                </div>

            </div>
        </div>
    )
}