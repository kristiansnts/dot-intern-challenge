import FinalScore from './page/FinalScore/FinalScore'
import Login from './page/Login/LoginPage'
import PortalPage from './page/Portal/PortalPage'
import Quizes from './page/Quiz/Quizes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <main className=''>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
              <Route index element={<PortalPage />} />
              <Route path="login" element={<Login />} />
              <Route path="quizes" element={<Quizes />} />
              <Route path="result" element={<FinalScore />}/>
          </Route>  
        </Routes>  
      </BrowserRouter>
    </main>
  )
}

export default App
