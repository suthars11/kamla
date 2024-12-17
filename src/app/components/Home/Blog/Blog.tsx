import React from 'react'
import SectionHeading from '../../SectionHeading'
import { blogs } from '@/app/data/data'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-200'>
        <div className='w-[80%] mx-auto'>
            <SectionHeading heading="Check Our Blogs"/>
            <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 mt-16 gap-6 items-center'>
                {blogs.map((blog)=>{
                    return <div key={blog.id}>
                        <BlogCard blog={blog}/>
                    </div>
                })}

            </div>

        </div>

    </div>
  )
}

export default Blog