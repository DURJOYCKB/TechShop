import React from 'react'

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid">
            {/* company details */}
            <div className='py-8 px-4'>
                <a
                  href='#'
                  className='text-red-600 font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
                >
                  Techshop
                </a>
                <p className='text-gray-600 lg:pr-24 pt-3'>
                    <li>Stay connected. Stay updated. Stay ahead</li>
                    <li>Explore. Experience. Enjoy tech</li>
                    <li>Upgrade your world with cutting-edge tech</li>
                    <li>© 2026 TechShop. All rights reserved.</li>
                </p>
                <p className='text-gray-500 mt-4'>Made by Durjoy Chakraborty</p>
                <a href="https://www.youtube.com/@durjoy_ckb" 
                target="_blank"
                className='inline-block bg-primary/90 text-white
                py-2 px-4 mt-4 text-sm rounded-full'
                >
                    Visit My Youtube Channel
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
