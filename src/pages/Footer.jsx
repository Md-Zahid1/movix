import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { IoLogoInstagram } from 'react-icons/io'
import { ImPinterest2 } from 'react-icons/im'

const Footer = () => {
    return (
        <div class="
    bg-no-repeat bg-cover bg-center
    bg-[url('public/img.jpg')]">
            <footer class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex   md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 ">
                        <img src='public/logo.webp' alt='image' />
                        <p class="mt-2 font-medium text-white">I can film your project whether it is a commercial advertise, a short film or a document film.</p>
                    </div>
                    <div class="flex-grow flex flex-wrap">
                        <div class="lg:w-1/4 w-full px-4">
                            <h2 class="title-font font-medium text-white mb-3 ">Our Gallery</h2>
                            <img src='/films5.jpg' alt='image' className='h-[70px] cursor-pointer' /><br />
                            <img src='/director1.jpg' alt='image' className='h-[70px] cursor-pointer' />
                            <img src='/director-service.jpg' alt='image' className='h-[70px] ml-[60px] mt-[-164px] cursor-pointer' />
                            <img src='/director-about.webp' alt='image' className='h-[70px] ml-[60px] mt-[20px] cursor-pointer'/>
                            <img src='/films5.jpg' alt='image' className='h-[70px] ml-[145px] mt-[-164px] cursor-pointer'/>
                            <img src='/director1.jpg' alt='image'className='h-[70px] ml-[145px] mt-2.5 cursor-pointer'/>
                        </div>
                        <div class="lg:w-1/4 w-full px-4">
                            <h2 class="title-font font-medium text-white mb-3 ">Follow Me</h2>
                            <h2 className='font-medium text-white mb-3'>Connect me with social media</h2>
                            <div className='flex'>
                                <CiFacebook className='text-white h-[50px] w-[50px] ml-[10px] cursor-pointer' />
                                <TiSocialTwitterCircular className='text-white h-[50px] w-[50px] ml-[10px] cursor-pointer' />
                                <IoLogoInstagram className='text-white h-[50px] w-[50px] ml-[10px]  cursor-pointer' />
                                <ImPinterest2 className='text-white h-[50px] w-[50px] ml-[10px] cursor-pointer' />
                            </div>
                        </div>
                        <div class="lg:w-1/4  w-full px-4">
                            <h2 class="title-font font-medium text-white mb-3">Contact Us</h2>
                            <p className='text-white'><strong>Phone</strong> - 0123456789</p>
                            <p className='text-white'><strong>Email</strong> - Faim@gmail.com</p>
                            <p className='text-white'><strong>Address</strong> - New Delhi floor-4</p>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Faime</p>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
