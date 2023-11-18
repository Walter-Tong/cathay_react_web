import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import BottomNav from './components/BottomNav'
import BoardingPage from '../pages/BoardingPage'

function App() {
  return (
    <>
      <div className="h-screen w-screen pt-20 px-5 font-montserrat">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/boarding" element={<BoardingPage />}></Route>
          <Route path="/map" element={<div>Contact</div>}></Route>
          <Route path="/info" element={<div>Contact</div>}></Route>
          <Route path="/help" element={<div>Contact</div>}></Route>
        </Routes>
      </div>
      <BottomNav />
    </>
  )
}

export default App
