import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../sectios/Home/HeroSection'
import PopularSection from '../sectios/Home/PopulaSection'
import Footer from '../components/Footer'
import NewSection from '../sectios/Home/NewSection'
import PaketTrip from '../sectios/Home/PaketTrip'
import PromoSection from '../sectios/Home/PromoSection'


const Home = () => {

  return (
    <>
    <Navbar />
    <HeroSection />
    <PopularSection />
    <NewSection />
    <PaketTrip />
    <PromoSection />
   
    <Footer />
    </>
  )
}

export default Home