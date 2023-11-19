import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import BottomNav from './components/BottomNav'
import BoardingPage from '../pages/BoardingPage'
import LoginPage from '../pages/LoginPage'
import HelpPage from '../pages/HelpPage'
import ShareFlightPage from '../pages/ShareFlightPage'
import AIPage from '../pages/AIPage'
import MapPage from '../pages/MapPage'

function App() {
  return (
    <>
      <div className="h-screen w-screen px-5 pt-3 font-montserrat">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/boarding" element={<BoardingPage />}></Route>
          <Route path="/map" element={<MapPage />}></Route>
          <Route path="/info" element={<HelpPage />}></Route>
          <Route path="/help" element={<AIPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/share-flight" element={<ShareFlightPage />}></Route>
        </Routes>
      </div>
      <BottomNav />
    </>
  )
}

export default App
