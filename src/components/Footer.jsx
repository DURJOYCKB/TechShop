import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

const FooterLinks = [
    { title: "Home", link: "/#" },
    { title: "About", link: "/#about" },
    { title: "Contact", link: "/#contact" },
    { title: "Blog", link: "/#blog" },
]

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-gray-300 py-16 ">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Company Info */}
                <div className="space-y-4">
                    <a href="#" className="text-red-600 font-bold tracking-widest text-3xl uppercase">
                        Techshop
                    </a>
                    <p className="text-gray-400 leading-relaxed">
                        Explore. Experience. Enjoy tech. <br />
                        © 2026 TechShop. All rights reserved.
                    </p>
                    <p className="text-gray-200">Made by Durjoy Chakraborty</p>
                    <a
                        href="https://www.youtube.com/@durjoy_ckb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary/90 text-white py-2 px-4 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300"
                    >
                        Visit My YouTube Channel
                    </a>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-2 gap-6 md:gap-10">
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-white">Important Links</h3>
                        <ul className="space-y-2">
                            {FooterLinks.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.link} className="hover:text-white transition-colors duration-300">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {FooterLinks.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.link} className="hover:text-white transition-colors duration-300">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact & Social */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">Contact Us</h3>
                    <div className="flex items-center gap-3">
                        <FaLocationArrow className="text-primary" />
                        <p>Chattogram, Bangladesh</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaMobileAlt className="text-primary" />
                        <p>015XXXXXXXX</p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-4">
                        <a href="https://www.instagram.com/durjoy_ckb/" className="text-gray-400 hover:text-pink-500 transition-colors duration-300 hover:scale-110">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="https://www.facebook.com/durjoy.chakraborty.834422" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 hover:scale-110">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/durjoyckb/" className="text-gray-400 hover:text-blue-600 transition-colors duration-300 hover:scale-110">
                            <FaLinkedin className="text-2xl" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer