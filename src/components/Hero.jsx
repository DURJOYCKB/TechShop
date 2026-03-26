import React from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import Headphone from '../assets/headphone.png'
import Laptop from '../assets/laptop.png'
import VR from '../assets/vr.png'
import Button from './Button'

const HeroData = [
  {
    id: 1,
    img: Headphone,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphones",
  },
  {
    id: 2,
    img: Laptop,
    subtitle: "Premium Series",
    title: "Branded",
    title2: "Laptops",
  },
  {
    id: 3,
    img: VR,
    subtitle: "Next Gen",
    title: "Immersive",
    title2: "VR Gear",
  },
]

const Hero = ({ handleOrderPopup }) => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
  }

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center 
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 relative">

        {/* Glow Effect */}
        <div className="absolute w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>

        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">

                  {/* TEXT SECTION */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-6 pt-12 sm:pt-0 text-center sm:text-left z-10">

                    <motion.h2
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-lg sm:text-xl text-white/80 font-medium">
                      {data.subtitle}
                    </motion.h2>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
                      {data.title}
                    </motion.h1>

                    <motion.h1
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 0.15, scale: 1 }}
                      transition={{ duration: 0.7 }}
                      className="uppercase text-white text-[60px] sm:text-[100px] lg:text-[140px] font-black leading-none">
                      {data.title2}
                    </motion.h1>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex gap-4 justify-center sm:justify-start">

                      <Button
                        text="Shop Now"
                        bgColor="bg-black"
                        textColor="text-white"
                        handler={handleOrderPopup}
                      />

                      <Button
                        text="Explore"
                        bgColor="bg-white/20 backdrop-blur-md"
                        textColor="text-white"
                      />

                    </motion.div>
                  </div>

                  {/* IMAGE SECTION */}
                  <div className="flex justify-center items-center">
                    <motion.img
                      src={data.img}
                      alt=""
                      initial={{ opacity: 0, scale: 0.8, y: 50 }}
                      animate={{ opacity: 1, scale: 1.1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      className="w-[280px] sm:w-[400px] lg:w-[450px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:scale-110 duration-500"
                    />
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hero
