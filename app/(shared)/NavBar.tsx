"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Icon from "../../public/travel-icon.png"
import Login from './Login';

export default function NavBar () {
  const [isChecked, setIsChecked] = useState(false);

  const handleLiClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
    <nav className='hidden md:flex items-center justify-around'>
        <div className='flex items-center'>
          <Image placeholder="blur" quality={50} src={Icon} alt='logo' className='w-[80px]'/>
        </div>
        <ul className='flex gap-8 text-sm font-semibold'>        
            <Link href='/'><li className='cursor-pointer'>Home</li></Link>
            <Link href='/faq'><li className='cursor-pointer'>Faq</li></Link>
            <Link href='/profile'><li className='cursor-pointer'>Profile</li></Link>
            <Link href='/about'><li className='cursor-pointer'>About</li></Link>
            <Link href='/contact'><li className='cursor-pointer'>Contact</li></Link>
        </ul>    
        <div className='flex gap-5 text-base items-center'>
            <p>USD</p>
            <Login checked={isChecked} setIsChecked={setIsChecked}/>
        </div> 
    </nav>
    <header className="header md:hidden">
        <Image placeholder="blur" quality={50} src={Icon} alt='logo' className='w-[60px] logo'/>
        <input className="side-menu" checked={isChecked}
        onChange={() => setIsChecked(!isChecked)} type="checkbox" id="side-menu"/>
        <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
        <nav className="shadow-lg nav pl-5 mt-5 flex flex-col">
          <ul className='flex  flex-col gap-8 text-sm font-semibold'>        
              <Link href='/'><li onClick={handleLiClick} className='ok cursor-pointer'>Home</li></Link>
              <Link href='/faq'><li onClick={handleLiClick} className='ok cursor-pointer list'>faq</li></Link>
              <Link href='/profile'><li onClick={handleLiClick} className='ok cursor-pointer'>Profile</li></Link>
              <Link href='/about'><li onClick={handleLiClick} className='cursor-pointer ok'>About</li></Link>
              <Link href='/contact'><li onClick={handleLiClick} className='cursor-pointer'>Contact</li></Link>
          </ul>    
          <div className='flex mb-5 gap-5 mt-7 text-base items-center'>
            <Login checked={isChecked} setIsChecked={setIsChecked}/>
          </div> 
        </nav>
    </header>
    </>
  )
}
