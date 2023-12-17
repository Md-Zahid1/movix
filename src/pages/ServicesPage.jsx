import React from 'react'
import ServiceCard from '../components/ServiceCard'

const ServicesPage = () => {
  return (
    <div className='bg-black flex'>
      <div className='ml-[120px]'>
        <p className='text-orange-600 text-2xl mt-[50px]'>services</p><br/>
        <h2 className='text-white text-7xl font-medium'>My Services</h2>
        <div>
        <ServiceCard />
        <ServiceCard />
        </div>
      </div>
      <div>
        <img src='public/director-service.jpg' alt='image'/>
      </div>
    </div>
  )
}

export default ServicesPage
