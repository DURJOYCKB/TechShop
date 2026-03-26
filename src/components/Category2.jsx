import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import Speaker from '../assets/speaker.png'
import Gaming from '../assets/gaming.png'
import VR from '../assets/vr.png'

const categories = [
  {
    title: "Gaming",
    img: Gaming,
    gradient: "from-gray-400/90 to-gray-100",
    btnBg: "bg-primary",
    btnText: "text-white",
    colSpan: "sm:col-span-2",
    imgStyle: "w-[260px] sm:w-[360px] bottom-0 right-0 -translate-y-1/2"
  },
  {
    title: "Virtual",
    img: VR,
    gradient: "from-brandGreen/90 to-brandGreen/70",
    btnBg: "bg-green-100",
    btnText: "text-black",
    imgStyle: "w-[200px] sm:w-[270px] bottom-5 right-0 translate-x-4"
  },
  {
    title: "Speakers",
    img: Speaker,
    gradient: "from-brandBlue to-brandBlue/90",
    btnBg: "bg-blue-100",
    btnText: "text-brandBlue",
    imgStyle: "w-[180px] sm:w-[240px] bottom-6 right-0 translate-x-6"
  }
]

const CategoryCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`relative h-[320px] p-6 rounded-3xl overflow-hidden
      bg-gradient-to-br ${item.gradient} text-white flex items-end
      shadow-md hover:shadow-2xl ${item.colSpan || ''}`}
    >
      {/* Glow (aligned with product) */}
      <div className="absolute w-[220px] h-[220px] bg-white/20 blur-3xl rounded-full right-10 top-1/2 -translate-y-1/2"></div>

      {/* Content */}
      <div className="z-10">
        <p className="text-sm text-white/80">Enjoy</p>
        <p className="text-xl font-medium">With</p>

        <h2 className="text-4xl xl:text-5xl font-bold opacity-60 mb-4">
          {item.title}
        </h2>

        <Button
          text="Browse"
          bgColor={item.btnBg}
          textColor={item.btnText}
        />
      </div>

      {/* Image */}
      <motion.img
        src={item.img}
        alt={item.title}
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1.08, rotate: 1 }}
        transition={{ duration: 0.35 }}
        className={`absolute ${item.imgStyle} z-0 object-contain
        drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)]`}
      />
    </motion.div>
  )
}

const Category = () => {
  return (
    <div className="py-14">
      <div className="container">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <CategoryCard key={index} item={item} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Category