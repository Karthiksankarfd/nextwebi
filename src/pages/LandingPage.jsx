import React from 'react'
import HeroSection from '../sections/HeroSection'
import NewRentals from '../sections/NewRentals'
import AboutUs from '../sections/AboutUs'
import Locations from '../sections/Locations'
import Mainfooter from '../sections/Footer'
import BlogsSection from '../sections/BlogsSection'
import Banner1 from '../components/fame-banners/banner1'
import InfinityScrollBox from '../components/animatedComponents/InfinityScrollBox'


const LandingPage = () => {
  return (
    <main>
       <HeroSection/>
        <InfinityScrollBox/>
        <NewRentals/>
        <AboutUs/>
        <Locations/>
        <BlogsSection/>
        <Mainfooter/>
    </main>
  )
}

export default LandingPage
