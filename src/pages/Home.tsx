import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../sectios/HeroSection'
import PopularSection from '../sectios/PopulaSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <PopularSection />
    <Footer />
    </>
  )
}

export default Home