import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import BottomNav from './components/BottomNav'
import BoardingPage from '../pages/BoardingPage'
import LoginPage from '../pages/LoginPage'
import HelpPage from '../pages/HelpPage'

function App() {
  return (
    <>
      <div className="h-screen w-screen px-5 pt-20 font-montserrat">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/boarding" element={<BoardingPage />}></Route>
          <Route path="/map" element={<div>map</div>}></Route>
          <Route path="/info" element={<div>info</div>}></Route>
          <Route path="/help" element={<HelpPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </div>
      <BottomNav />
    </>
  )
}

export default App
