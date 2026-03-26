import React from 'react'
import { motion } from 'framer-motion'
import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide />,
    title: "Free Shipping",
    description: "Free shipping on all orders",
  },
  {
    id: 2,
    icon: <FaCheckCircle />,
    title: "Money Back",
    description: "30 days money back guarantee",
  },
  {
    id: 3,
    icon: <FaWallet />,
    title: "Secure Payment",
    description: "All payments are secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt />,
    title: "24/7 Support",
    description: "Technical support 24/7",
  },
]

const ServiceCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-4 p-5 rounded-2xl
      bg-white dark:bg-gray-900 border border-transparent
      hover:border-primary/40 transition-all duration-300"
    >
      {/* Icon with bounce animation */}
      <motion.div
        className="text-primary text-3xl md:text-4xl bg-primary/10 p-3 rounded-xl"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        {item.icon}
      </motion.div>

      {/* Text */}
      <div>
        <h3 className="text-base md:text-lg font-semibold">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

const Services = () => {
  return (
    <div className="my-16">
      <div className="container">

        {/* Section Title */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Our Services
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Why shop with us
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ServiceData.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Services