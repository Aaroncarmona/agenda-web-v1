import { ContactsList } from '../components/ContactsList'
import { NavigationCreate } from '../components/NavigationCreate'
import { Navigation } from '../components/Navigation'
import { useState } from 'react'
import { ContactsFromPage } from './ContactsFormPage'


export function ContactsPage() {

  const [filtro , setFiltro] = useState('')
  const [contact , setContact] = useState({})

    return (
        <div className='flex'>
          
          <div className='flex flex-col flex-grow'>
            <Navigation filter={filtro} setFilter={setFiltro} /> 
            <div className='flex flex-col h-screen'>
              
              <div className='flex-grow overflow-y-auto h-0 scrollbar-transparent-gray'>
                <ContactsList filter={filtro} contact={contact} setContact={setContact}/>
              </div>
              <div className=''>
                <NavigationCreate  />
              </div>
            </div>
          </div>

          <div className='flex-grow'>
            <ContactsFromPage id={1} setId={setContact} />
          </div>
          
          
        </div>
    )
  }


  /*
      
  */