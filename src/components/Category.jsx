import React from 'react'
import Button  from './Button'
import Earphone from '../assets/earphones.png'
import Watch from '../assets/watch.png'
import Laptop from '../assets/laptop.png'

const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-8'>

          {/* frist col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-black/90 
          to-black/70 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className="mb-[2px] text-gray-400">Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                    <Button 
                    text="Browse"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                    />
                </div>
            </div>
            <img src={Earphone} alt="" className='w-[290px] absolute
            bottom-0 right-0 translate-x-5'/>
          </div>

          {/* second col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow 
          to-brandYellow/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className="mb-[2px] text-white">Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Watches</p>
                    <Button 
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-black"}
                    />
                </div>
            </div>
            <img src={Watch} alt="" className='w-[240px] absolute
            bottom-9 -right-0 translate-x-6'/>
          </div>

          {/* third col */}
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-red-600 
          to-red-300 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className="mb-[2px] text-white">Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptop</p>
                    <Button 
                    text="Browse"
                    bgColor={"bg-yellow-200"}
                    textColor={"text-black"}
                    />
                </div>
            </div>
            <img src={Laptop} alt="" className='w-[350px] absolute
            top-1/2 -translate-y-1/2 -right-0'/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Category
