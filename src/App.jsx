import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from './components/Category';
import Category2 from './components/Category2';
import Services from './components/Services';
import Banner from './components/Banner';

import Headphone2 from "./assets/headphone2.png"

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Apr to 28 Apr",
  image: Headphone2,
  title2: "Air Solo Bass",
  title3: "Winner Sale",
  title4: "Dive into a world of pure sound and feel the music the way it was meant to be.",
  bgColor: "#f42c37",
}

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data = {BannerData}/>
    </div>
  )
}

export default App
