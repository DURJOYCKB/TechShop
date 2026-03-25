import React from 'react'
import Heading from './Heading'
import Img1 from '../assets/image1.jpeg'
import Img2 from '../assets/image2.jpeg'
import Img3 from '../assets/image3.jpeg'

const BlogData = [
    {
        title: "The Rise of Tech Gadgets: Transforming Everyday Life",
        subtitle: "Exploring how modern devices like smartphones, laptops, and smart wearables are reshaping the way we live, work, and connect",
        published: "March 25, 2026",
        image: Img1,
        aosDelay: "0",
    },
    {
        title: "Must-Have Tech Gadgets in 2026",
        subtitle: "A curated list of the latest and most useful gadgets that can upgrade your daily lifestyle and productivity",
        published: "March 25, 2026",
        image: Img2,
        aosDelay: "200",
    },
    {
        title: "Smart Living: How Technology is Changing Our Homes",
        subtitle: "Discover how smart devices and automation are making homes more efficient, secure, and convenient than ever before",
        published: "March 25, 2026",
        image: Img3,
        aosDelay: "400",
    },
]

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className='container'>
        {/* Header Section */}
        <Heading title="Recent News"
        subtitle={"Exploring Our Blogs"}
        />

        {/* Blog Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
            {/* Blog Card */}
            {
                BlogData.map((data) => (
                    <div 
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      key={data.title} 
                      className='bg-white
                      dark:bg-gray-900'>
                        {/* image section */}
                        <div className='overflow-hidden rounded-2xl mb-2'>
                            <img src={data.image} 
                            alt="" 
                            className='w-full h-[220px] object-cover
                            rounded-2xl hover:scale-105 duration-300'/>
                        </div>
                        {/* content section */}
                        <div className='space-y-2'>
                            <p className='text-xs text-gray-500'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.title}</p>
                            <p className='line-clamp-2 text-sm text-gray-600
                            dark:text-gray-400'>{data.subtitle}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Blogs
