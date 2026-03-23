import React from 'react'
import Button  from './Button'
import Speaker from '../assets/speaker.png'
import Gaming from '../assets/gaming.png'
import VR from '../assets/vr.png'

const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-8'>

          {/* first col */}
          <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br
          from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className="mb-[2px] text-white">Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gaming</p>
                    <Button 
                    text="Browse"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                    />
                </div>
            </div>
            <img src={Gaming} alt="" className='w-[350px] absolute
            top-1/2 -translate-y-1/2 -right-0'/>
          </div>

         {/* second col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 
          to-brandGreen/70 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className="mb-[2px] text-white">Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Virtuals</p>
                    <Button 
                    text="Browse"
                    bgColor={"bg-green-100"}
                    textColor={"text-black"}
                    />
                </div>
            </div>
            <img src={VR} alt="" className='w-[260px] absolute
            bottom-5 right-0 translate-x-5'/>
          </div>

          {/* third col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue 
          to-brandBlue/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className="mb-[2px] text-white">Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Speakers</p>
                    <Button 
                    text="Browse"
                    bgColor={"bg-blue-100"}
                    textColor={"text-brandBlue"}
                    />
                </div>
            </div>
            <img src={Speaker} alt="" className='w-[230px] absolute
            bottom-7 -right-0 translate-x-6'/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Category
