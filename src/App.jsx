import Login from './components/Login/Login'
import Quizes from './components/Quiz/Quizes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <main className='flex h-screen w-full justify-center items-center'>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
              <Route index element={<Login />} />
              <Route path="quizes" element={<Quizes />} />
          </Route>  
        </Routes>  
      </BrowserRouter>
    </main>
  )
}

export default App
