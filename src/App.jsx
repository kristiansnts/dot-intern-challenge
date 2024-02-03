import FinalScore from './components/FinalScore/FinalScore'
import Login from './components/Login/Login'
import Quizes from './components/Quiz/Quizes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import DataFetching from './data/DataFetching'

function App() {
  return (
    <main className='flex h-screen w-full justify-center items-center'>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
              <Route index element={<Login />} />
              <Route path="quizes" element={<Quizes />} />
              <Route path="logout" element={<FinalScore />}/>
              {/* <Route path="data" element={<DataFetching />} /> */}
          </Route>  
        </Routes>  
      </BrowserRouter>
    </main>
  )
}

export default App
