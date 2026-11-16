
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import LandinPage from './Pages/LandinPage'


function App() {

  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/landingpage' element={<LandinPage/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App
