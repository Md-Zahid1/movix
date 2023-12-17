import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { IoLogoInstagram } from 'react-icons/io'
import { ImPinterest2 } from 'react-icons/im'

const Contact = () => {
  return (
    <div>
      <h2 className='ml-[800px] font-bold font-6xl'>Contact</h2>
      <span className='ml-[780px]'> ---------------- </span>
      <div className='mt-[150px]'>
        <h2 className='ml-[30px] text-2xl'>Our Feacher</h2>
        <span className='ml-[40px]'> ----------- </span><br /><br />
        <img src='/img.jpg' alt='image' className='h-[90px] w-[90px] rounded-full ml-[30px]' /><br />
        <p>Lorem ipsm lorem ipsom lorem ipsom</p>
        <p>Lorem ipsm lorem ipsom lorem ipsom</p>
        <p>Lorem ipsom lorem ipsom lorem ipson</p>
      </div>
      <button className='border h-[40px] w-[180px] ml-[15px] bg-orange-600 text-white font-medium'>Show More Detail</button>
      <h1 className='ml-[600px] text-3xl'>Follow Social Media Links</h1>
      <div className='flex ml-[620px]'>
        <CiFacebook className='text-black h-[50px] w-[50px] ml-[10px] cursor-pointer' />
        <TiSocialTwitterCircular className='text-black h-[50px] w-[50px] ml-[10px] cursor-pointer' />
        <IoLogoInstagram className='text-black h-[50px] w-[50px] ml-[10px]  cursor-pointer' />
        <ImPinterest2 className='text-black h-[50px] w-[50px] ml-[10px] cursor-pointer' />
      </div>
    </div>
  )
}

export default Contact
