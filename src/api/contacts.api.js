import axios from 'axios'

const contactsApi = axios.create({
    baseURL : 'http://localhost:8080/contacts/api/v1/contact/'
})

export const getAllContacts = () => 
    contactsApi.get('/')

export const createContact = ( contact ) => 
    contactsApi.post("/" , contact)

export const deleteContact = ( id ) => 
    contactsApi.delete(`/${id}`)

export const updateContract = ( id , contact ) =>
    contactsApi.put(`/${id}/`, contact)

export const getContact = ( id ) => 
    contactsApi.get(`/${id}/`)