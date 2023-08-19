import { BrowserRouter , Navigate, Route, Router, Routes } from 'react-router-dom'
import { ContactsFromPage } from './pages/ContactsFormPage'
import { ContactsPage } from './pages/ContactsPage'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Routes>
          <Route path='/' element={<Navigate to='/contacts' />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/contacts-create' element={<ContactsFromPage />} />
          
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  )
}

export default App
/*
<Route path='/contacts/:id' element={<ContactsFromPage />} />
*/