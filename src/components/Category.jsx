import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import Earphone from '../assets/earphones.png'
import Watch from '../assets/watch.png'
import Laptop from '../assets/laptop.png'

const CategoryCard = ({ title, img, bg, btnBg, btnText }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`relative h-[320px] p-6 ${bg} text-white rounded-3xl 
      flex items-end overflow-hidden shadow-md hover:shadow-2xl`}
    >
      {/* Soft glow (behind product, not random) */}
      <div className="absolute w-[220px] h-[220px] bg-white/10 blur-3xl rounded-full right-10 top-1/2 -translate-y-1/2"></div>

      {/* Content */}
      <div className="z-10">
        <p className="text-sm text-white/70">Enjoy</p>
        <p className="text-xl font-medium">With</p>

        <h2 className="text-4xl xl:text-5xl font-bold opacity-60 mb-4">
          {title}
        </h2>

        <Button
          text="Browse"
          bgColor={btnBg}
          textColor={btnText}
        />
      </div>

      {/* Image */}
      <motion.img
        src={img}
        alt={title}
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1.08, rotate: 1 }}
        transition={{ duration: 0.35 }}
        className="absolute bottom-0 right-0 w-[230px] sm:w-[300px]
        object-contain z-0 drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)]"
      />
    </motion.div>
  )
}

const Category = () => {
  return (
    <div className="py-14">
      <div className="container">

        {/* Section Title */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Shop by Category
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Explore our trending tech collections
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Earphones */}
          <CategoryCard
            title="Earphones"
            img={Earphone}
            bg="bg-gradient-to-br from-black/90 to-black/70"
            btnBg="bg-primary"
            btnText="text-white"
          />

          {/* Watches */}
          <CategoryCard
            title="Watches"
            img={Watch}
            bg="bg-gradient-to-br from-yellow-400 to-yellow-300"
            btnBg="bg-white"
            btnText="text-black"
          />

          {/* Laptop (big card) */}
          <div className="sm:col-span-2">
            <CategoryCard
              title="Laptops"
              img={Laptop}
              bg="bg-gradient-to-br from-red-600 to-red-400"
              btnBg="bg-white"
              btnText="text-black"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Category