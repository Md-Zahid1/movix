import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { IoLogoInstagram } from 'react-icons/io'
import { ImPinterest2 } from 'react-icons/im'


const TeamSection = () => {
    return (
        <div>
            <div className='bg-black'>
                <div className='ml-[800px] pt-[50px]'>
                    <p className='text-orange-600 text-2xl'>Export Team</p>
                    <h2 className='text-white text-6xl ml-[-60px]'>Meet My Team</h2>
                </div>
                <div className='w-[100%] h-auto'>
                    <img src='public/director1.jpg' alt='image' className='ml-[50px] mt-[50px]' />
                </div>
                <p className='text-white ml-[150px]'>Junior Director</p>
                <h2 className='text-white ml-[120px] text-3xl'>Daniyel Feather</h2>
                <div className='flex ml-[70px]'>
                    <CiFacebook className='text-white h-[50px] w-[50px] ml-[10px] ' />
                    <TiSocialTwitterCircular className='text-white h-[50px] w-[50px] ml-[10px]' />
                    <IoLogoInstagram className='text-white h-[50px] w-[50px] ml-[10px]  ' />
                    <ImPinterest2 className='text-white h-[50px] w-[50px] ml-[10px]' />
                </div>
                <div className='w-[100%] h-auto'>
                    <img src='/films5.jpg' alt='image' className='ml-[50px] mt-[50px] h-[450px]' />
                </div>
                <p className='text-white ml-[150px]'>Junior Director</p>
                <h2 className='text-white ml-[120px] text-3xl'>Daniyel Feather</h2>
                <div className='flex ml-[70px]'>
                    <CiFacebook className='text-white h-[50px] w-[50px] ml-[10px] ' />
                    <TiSocialTwitterCircular className='text-white h-[50px] w-[50px] ml-[10px]' />
                    <IoLogoInstagram className='text-white h-[50px] w-[50px] ml-[10px]  ' />
                    <ImPinterest2 className='text-white h-[50px] w-[50px] ml-[10px]' />
                </div>
                <hr />
            </div>
        </div>
    )
}

export default TeamSection
