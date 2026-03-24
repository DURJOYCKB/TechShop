import React from 'react'
import Heading from "./Heading"
import ProductCard from './ProductCard'
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpeg'
import Img3 from '../assets/img3.jpg'
import Img4 from '../assets/img4.jpg'
import Img5 from '../assets/img5.jpeg'
import Img6 from '../assets/img6.jpeg'
import Img7 from '../assets/img7.jpeg'
import Img8 from '../assets/img8.jpeg'

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Smart Watch",
        price: "110",
        aosDelay: "0",
    },
    {
        id: 3,
        img: Img3,
        title: "Boat Headphone",
        price: "320",
        aosDelay: "0",
    },
    {
        id: 4,
        img: Img4,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
];

const ProductsData2 = [
    {
        id: 5,
        img: Img5,
        title: "Wireless Mouse",
        price: "150",
        aosDelay: "0",
    },
    {
        id: 6,
        img: Img6,
        title: "Gaming Keyboard",
        price: "250",
        aosDelay: "0",
    },
    {
        id: 7,
        img: Img7,
        title: "Gaming Keyboard",
        price: "250",
        aosDelay: "0",
    },
    {
        id: 8,
        img: Img8,
        title: "Wireless Mouse",
        price: "150",
        aosDelay: "0",
    },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <Heading title="Best Selling Products"
        subtitle={"Exploring Our Products"}
        />
        {/* Body Section */}
        <ProductCard data= {ProductsData}/>
        <ProductCard data= {ProductsData2}/>
      </div>
    </div>
  )
}

export default Products
