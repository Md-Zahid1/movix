import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { ImPinterest2 } from "react-icons/im";
import { NavLink } from 'react-router-dom';

const BannerSection = () => {
  return (
    <div class="
    bg-no-repeat bg-cover bg-center
    bg-[url('public/director.jpg')]
    
">
     <h2 className='text-orange-500 text-2xl ml-[290px] pt-[80px]' >I'M FILM DIRECTOR</h2>
     <span className='text-white ml-[10px] rotate-[-90]'>Follow</span>
     <span className='text-8xl text-white ml-[250px]'>DAVID</span><br/>
     <span className='text-8xl text-white ml-[290px]'>ANDERSON</span><br/><br/>
     <span className='text-2xl text-white ml-[290px]'>Faime Production is A Full-Service Production House Based</span><br/>
     <span className='text-2xl text-white ml-[290px]'>Out Of Indonesia And Singapore That Hosts A Thriving Roster</span><br/>
     <span className='text-2xl text-white ml-[290px]'>Of Directors.</span><br/><br/>
     <NavLink to='/contact'>
     <button className='text-white border h-[40px] w-[120px] ml-[290px]'>Contact Me</button>
     </NavLink>
      <CiFacebook className='text-white h-[50px] w-[50px] ml-[10px] ' />
      <TiSocialTwitterCircular className='text-white h-[50px] w-[50px] ml-[10px]' />
      <IoLogoInstagram className='text-white h-[50px] w-[50px] ml-[10px]  ' />
      <ImPinterest2 className='text-white h-[50px] w-[50px] ml-[10px]' />
      <div>
        <div className='flex ml-[1380px] gap-6 mt-[-30px]'>
            <img src='public/award1.png' alt='image'/>
            <img src='public/award1.png' alt='image'/>
            <img src='public/award1.png' alt='image'/>
        </div>
      </div>
    </div>
         
  )
}

export default BannerSection
