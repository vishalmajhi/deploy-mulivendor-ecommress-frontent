import React from 'react'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import BestDeals from '../components/BestDeal'
import FeaturesProducts from '../components/FeaturesProducts'
import Event from '../components/Event'

function Homepage() {
  return (
    <><div class='bg-zinc-100'>


    <Navbar />  
    <Header/>
    <HeroBanner/>
    <Categories/>
    <BestDeals/>
   <Event/>
    <FeaturesProducts/>
    <Footer/>
    </div>
    
    </>
  )
}

export default Homepage