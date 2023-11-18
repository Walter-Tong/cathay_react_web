import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import BottomNav from './components/BottomNav'

function App() {
  return (
    <>
      <div className="h-screen w-screen pt-20 px-5">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<div>Contact</div>}></Route>
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
