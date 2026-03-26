import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/* company details */}
            <div className='py-8 px-4'>
                <a
                  href='#'
                  className='text-red-600 font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
                >
                  Techshop
                </a>
                <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                    Explore. Experience. Enjoy tech. <br />
                    © 2026 TechShop. All rights reserved.
                </p>
                <p className='dark:text-gray-400 text-black mt-4'>Made by Durjoy Chakraborty</p>
                <a href="https://www.youtube.com/@durjoy_ckb" 
                target="_blank"
                className='inline-block bg-primary/90 text-white
                py-2 px-4 mt-4 text-sm rounded-full'
                >
                    Visit My Youtube Channel
                </a>
            </div>
            {/* Footer Links */}
            <div className='col-span-2 grid grid-cols-2
            sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>
                        Important Links
                    </h1>
                    <ul className='space-y-3'>
                        {FooterLinks.map((data, index) => (
                            <li key= {index}>
                                <a 
                                  href={data.link}
                                  className='text-gray-600 dark:text-gray-400 
                                  hover:dark:text-white hover:text-black duration-300'
                                >
                                  {data.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* second col links */}
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>
                        Quick Links
                    </h1>
                    <ul className='space-y-3'>
                        {FooterLinks.map((data, index) => (
                            <li key= {index}>
                                <a 
                                  href={data.link}
                                  className='text-gray-600 dark:text-gray-400 
                                  hover:dark:text-white hover:text-black duration-300'
                                >
                                  {data.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* company address */}
                <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>
                        Important Links
                    </h1>
                    <div>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow />
                            <p>Chattogram, Bangladesh</p>
                        </div>
                        <div className='flex items-center gap-3 mt-6'>
                            <FaMobileAlt />
                            <p>015XXXXXXXX</p>
                        </div>

                        {/* social links */}
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="https://www.instagram.com/durjoy_ckb/">
                                <FaInstagram className='text-3xl
                                hover:text-primary duration-300' />
                            </a>
                            <a href="https://www.facebook.com/durjoy.chakraborty.834422">
                                <FaFacebook className='text-3xl
                                hover:text-blue-500 duration-300' />
                            </a>
                            <a href="https://www.linkedin.com/in/durjoyckb/">
                                <FaLinkedin className='text-3xl
                                hover:text-blue-600 duration-300' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
