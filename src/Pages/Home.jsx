import React from 'react'
import '../App.css'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Searchlocation from '../Components/Searchlocation'
import ExploreCities from '../Components/ExploreCities'
import Alaska from '../Components/Alaska'
import HomeCards from '../Components/HomeCards'
import TrevelData from '../Components/TrevelData'
import TravelCrousel from '../Components/TravelCrousel'
import SmartCity from '../Components/SmartCity'
import FormGallary from '../Components/FormGallary'
import LatestStories from '../Components/LatestStories'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div className="card">
      <Hero />
      <Searchlocation />
      <ExploreCities />
      <Alaska />
      <HomeCards />
      <TrevelData />
      <TravelCrousel />
      <SmartCity />
      <FormGallary />
      <LatestStories />
    </div>
  )
}

export default Home
