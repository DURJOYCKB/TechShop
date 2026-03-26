import React from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";
import Img1 from "../assets/image1.jpeg";
import Img2 from "../assets/image2.jpeg";
import Img3 from "../assets/image3.jpeg";

const BlogData = [
  {
    title: "The Rise of Tech Gadgets: Transforming Everyday Life",
    subtitle:
      "Exploring how modern devices like smartphones, laptops, and smart wearables are reshaping the way we live, work, and connect",
    published: "March 25, 2026",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "Must-Have Tech Gadgets in 2026",
    subtitle:
      "A curated list of the latest and most useful gadgets that can upgrade your daily lifestyle and productivity",
    published: "March 25, 2026",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "Smart Living: How Technology is Changing Our Homes",
    subtitle:
      "Discover how smart devices and automation are making homes more efficient, secure, and convenient than ever before",
    published: "March 25, 2026",
    image: Img3,
    aosDelay: "400",
  },
];

const BlogCard = ({ data }) => {
  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={data.aosDelay}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-900 rounded-3xl shadow-md hover:shadow-2xl overflow-hidden cursor-pointer relative"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-t-3xl">
        <motion.img
          src={data.image}
          alt={data.title}
          className="w-full h-[220px] object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <p className="text-xs text-gray-400">{data.published}</p>
        <h3 className="text-lg font-bold line-clamp-2 text-gray-900 dark:text-white">
          {data.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {data.subtitle}
        </p>
      </div>

      {/* Optional Glow */}
      <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10"></div>
    </motion.div>
  );
};

const Blogs = () => {
  return (
    <div className="my-16">
      <div className="container">
        {/* Heading */}
        <Heading title="Recent News" subtitle="Explore Our Blogs" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {BlogData.map((data) => (
            <BlogCard key={data.title} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;