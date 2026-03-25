import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from './components/Category';
import Category2 from './components/Category2';
import Services from './components/Services';
import Banner from './components/Banner';
import Products from './components/Products';
import Blogs from './components/Blogs';
import Footer from './components/Footer'
import Popup from './components/Popup'
import AOS from "aos";
import "aos/dist/aos.css"

import Headphone2 from "./assets/headphone2.png"
import Watch2 from "./assets/watch2.png"

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

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "10 Apr to 28 Apr",
  image: Watch2,
  title2: "Air Solo Bass",
  title3: "Winner Sale",
  title4: "Dive into a world of pure sound and feel the music the way it was meant to be.",
  bgColor: "#5b40beff",
}

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category />
      <Category2 />
      <Services />
      <Banner data = {BannerData}/>
      <Products />
      <Banner data = {BannerData2}/>
      <Blogs />
      <Footer />
      <Popup orderPopup={orderPopup}
      handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App
