"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Icon from "../../public/travel-icon.png"
import Login from './Login';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
import { IoIosArrowDown } from 'react-icons/io';

interface NavbarProps {
  currentUser?: User | null
  
}

export default function NavBar ({currentUser}:NavbarProps) {
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
            <li className='cursor-pointer'><Link href='/'>Home</Link></li>
            <li className='cursor-pointer'><Link href='/faq'>Faq</Link></li>
            <li className='cursor-pointer'><Link href={`/profile/${currentUser?.id}`}>Profile</Link></li>
            <li className='cursor-pointer'><Link href='/about'>About</Link></li>
            <li className='cursor-pointer'><Link href='/contact'>Contact</Link></li>
            <li className='relative admin-route'>
              <div className='flex cursor-pointer items-center gap-3'>
              <span className=''>Admin</span><IoIosArrowDown className="text-xl arrow-admin"/>
              </div>
              <div className='flex admin-list  flex-col border py-3 px-4 rounded-sm shadow-sm gap-3 top-5 bg-white absolute'>
                <Link className='hover:text-black text-slate-600 cursor-pointer w-24 h-7' href='/admin/car'>Car</Link>
                <Link className='hover:text-black text-slate-600 cursor-pointer w-24 h-7' href='/admin/hotel'>Hotel</Link>
                <Link className='hover:text-black text-slate-600 cursor-pointer w-24 h-7' href='/admin/location'>Location</Link>
              </div>
            </li>
        </ul>    
        <div className='flex gap-5 text-base items-center'>
            <p>USD</p>
            {!currentUser ? <Login checked={isChecked} setIsChecked={setIsChecked}/> : 
            <button onClick={() => signOut()} className='bg-[rgb(58,94,206)] text-white w-28 text-xs font-medium rounded-full py-2 px-4'>Log out</button>
            }
        </div> 
    </nav>
    <header className="header md:hidden">
        <Image placeholder="blur" quality={50} src={Icon} alt='logo' className='w-[60px] logo'/>
        <input className="side-menu" checked={isChecked}
        onChange={() => setIsChecked(!isChecked)} type="checkbox" id="side-menu"/>
        <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
        <nav className="shadow-lg nav pl-5 mt-5 flex flex-col">
          <ul className='flex  flex-col gap-8 text-sm font-semibold'>        
              <li onClick={handleLiClick} className='ok cursor-pointer'><Link href='/'>Home</Link></li>
              <li className='relative admin-route'>
                <div className='flex cursor-pointer items-center gap-3'>
                  <span className=''>Admin</span><IoIosArrowDown className="text-xl arrow-admin"/>
                </div>
                <div className='flex admin-list  flex-col border py-3 px-4 rounded-sm shadow-sm gap-3 top-5 bg-white absolute'>
                  <Link onClick={handleLiClick} className='hover:text-black text-slate-600 cursor-pointer w-24 h-7' href='/admin/car'>Car</Link>
                  <Link onClick={handleLiClick} className='hover:text-black text-slate-600 cursor-pointer w-24 h-7' href='/admin/hotel'>Hotel</Link>
                  <Link onClick={handleLiClick} className='hover:text-black text-slate-600 cursor-pointer w-24 h-7' href='/admin/location'>Location</Link>
                </div>
              </li>
              <li onClick={handleLiClick} className='ok cursor-pointer'><Link href='/faq'>faq</Link></li>
              <li onClick={handleLiClick} className='cursor-pointer'><Link href={`/profile/${currentUser?.id}`}>Profile</Link></li>
              <li onClick={handleLiClick} className='ok cursor-pointer'><Link href='/about'>About</Link></li>
              <li onClick={handleLiClick} className='ok cursor-pointer'><Link href='/contact'>Contact</Link></li>
              
          </ul>    
          <div className='flex mb-5 gap-5 mt-7 text-base items-center'>
            {!currentUser ? <Login checked={isChecked} setIsChecked={setIsChecked}/> : 
            <button onClick={() => signOut()} className='bg-[rgb(58,94,206)] text-white w-28 text-xs font-medium rounded-full py-2 px-4'>Log out</button>
            }
          </div> 
        </nav>
    </header>
    </>
  )
}
