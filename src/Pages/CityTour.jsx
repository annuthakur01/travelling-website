import React from 'react'
import Navbar from '../Components/Navbar'
import ThamesRiver from '../CityComponents/ThamesRiver'
import TourInfo from '../CityComponents/TourInfo'
import Activity from '../Components/Activity'
import ToursToday from '../Components/ToursToday'
import RelatedTours from '../Components/RelatedTours'
import CustomerReview from '../Components/CustomerReview'


const CityTour = () => {
  return (
    <div>
      <ThamesRiver />
      <TourInfo />
      <Activity />
      <ToursToday />
      <RelatedTours />
      <CustomerReview />
      
    </div>
  )
}

export default CityTour
