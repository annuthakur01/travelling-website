import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import CityTour from "./Pages/CityTour"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import CityList from "./Pages/CityList"
import MyProfile from "./Pages/MyProfile"

function App() {

  return (
    <div >
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CityTour" element={<CityTour />} />
        <Route path="/CityList" element={<CityList />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
      <Footer />
    </Router>
    </div>


  )
}

export default App
