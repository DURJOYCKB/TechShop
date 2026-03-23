import React from 'react'
import { IoMdSearch, IoMdMenu, IoMdClose } from 'react-icons/io'
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
]

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className='container flex items-center justify-between'>
          
          {/* Left section - Logo */}
          <div className='flex items-center'>
            <a
              href='#'
              className='text-cyan-700 font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
            >
              Techshop
            </a>
          </div>

          {/* Center section - Desktop Menu */}
          <div className='hidden lg:flex flex-1 justify-center'>
            <ul className='flex items-center gap-8'>
              {MenuLinks.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                  >
                    {data.name}
                  </a>
                </li>
              ))}

              {/* Dropdown */}
              <li className='relative cursor-pointer group'>
                <a
                  href='#'
                  className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'
                >
                  Quick Links
                  <span>
                    <FaCaretDown className='group-hover:rotate-180 duration-300' />
                  </span>
                </a>

                {/* Dropdown Links */}
                <div className='absolute left-1/2 -translate-x-1/2 z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                  <ul className='space-y-2'>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className='text-gray-500 dark:hover:text-white duration-200 block w-full p-2 hover:bg-primary/20 rounded-md font-semibold'
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Right section */}
          <div className='flex items-center gap-4'>
            
            {/* Search bar section */}
            <div className='relative group hidden sm:block'>
              <input
                type='text'
                placeholder='Search'
                className='search-bar'
              />
              <IoMdSearch
                className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200'
              />
            </div>

            {/* Cart section */}
            <button className='relative p-3'>
              <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
              <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                4
              </div>
            </button>

            {/* Dark mode section */}
            <DarkMode />

            {/* Mobile Menu Button */}
            <button
              className='lg:hidden text-2xl text-gray-600 dark:text-gray-400'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='lg:hidden bg-white dark:bg-gray-900 shadow-md mt-2'>
            <ul className='flex flex-col gap-2 py-4 px-6'>
              
              {/* Mobile Search Bar */}
              <li className='w-full'>
                <div className='relative group'>
                  <input
                    type='text'
                    placeholder='Search'
                    className='w-full rounded-full border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 pr-10 text-gray-700 dark:text-white outline-none'
                  />
                  <IoMdSearch
                    className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200'
                  />
                </div>
              </li>

              {/* Main Links */}
              {MenuLinks.map((data) => (
                <li key={data.id} className='w-full'>
                  <a
                    href={data.link}
                    className='text-gray-500 dark:text-gray-300 dark:hover:text-white duration-200 block w-full p-2 hover:bg-primary/20 rounded-md font-semibold'
                    onClick={() => setIsOpen(false)}
                  >
                    {data.name}
                  </a>
                </li>
              ))}

              {/* Quick Links in Mobile */}
              {DropdownLinks.map((data) => (
                <li key={data.id} className='w-full'>
                  <a
                    href={data.link}
                    className='text-gray-500 dark:text-gray-300 dark:hover:text-white duration-200 block w-full p-2 hover:bg-primary/20 rounded-md font-semibold'
                    onClick={() => setIsOpen(false)}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar