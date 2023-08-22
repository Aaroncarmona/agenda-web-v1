import { BrowserRouter , Navigate, Route, Router, Routes } from 'react-router-dom'
import { ContactsPage } from './pages/ContactsPage'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path='/' element={<ContactsPage />} />
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  )
}

export default App
/*
<Route path='/contacts/:id' element={<ContactsFromPage />} />
<Route path='/contacts-create' element={<ContactsFromPage />} />
*/