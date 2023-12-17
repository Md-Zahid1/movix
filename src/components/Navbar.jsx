import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex w-full bg-black h-[80px]'>
            <NavLink to='/'><img src='public/logo.webp' alt='' className='cursor-pointer' /></NavLink>
            <span className='w-[1px] h-[50px] bg-white/[0.4] mt-[15px] ml-[25px]'></span>
            <CiMenuFries className='h-[30px] w-[100px] text-white mt-[25px] cursor-pointer' />
            <div className='w-1/2 mt-[20px]'>
                <ul className='flex items-center justify-center  gap-[30px] font-medium text-white text-2xl '>
                    <Link to='/' className='cursor-pointer'>Home</Link>
                    <Link to='/movie' className='cursor-pointer'>Movie</Link>
                    <Link to='/portfolio' className='cursor-pointer'>Portfolio</Link>
                    <Link to='/pages' className='cursor-pointer'>Pages</Link>
                    <Link to='/blog' className='cursor-pointer'>Blog</Link>
                    <Link to='/contact' className='cursor-pointer'>Contact</Link>
                </ul>
            </div>
            <div className='bg-orange-600 ml-[200px] h-[60px] w-[170px] mt-[10px] text-white font-medium flex'>
                <NavLink to='/login'>
                    <button className='pl-[20px]'>
                        Login
                    </button>
                </NavLink>
                <GoArrowUpRight className='h-[20px] w-[20px] mt-[20px] ml-[10px]' />
            </div>
        </div>
    )
}

export default Navbar
