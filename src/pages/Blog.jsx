import React from 'react'

const Blog = () => {
  return (
    <div className='flex'>
      <div>
        <h2 className='ml-[750px] text-5xl mt-[10px]'>Blog</h2>
        <span className='ml-[740px]'>-----------------</span>
        <p className='text-3xl ml-[20px]'>New Updates</p><br />
        <p className='ml-[20px]'>Whats New Update</p>
        <p className='ml-[20px]'>Let's Learn Update</p>
        <p className='ml-[20px]'>Update in oneshort</p>
        <p className='ml-[20px]'>Update keyPoint</p>
      </div>
      <div className='mt-[100px]'>
        <img src='/director-service.jpg' alt='image' />
      </div>
    </div>
  )
}

export default Blog
