import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'
import { links } from '../utilites/linkData'
import {RiLogoutBoxRFill,RiCloseFill} from  "react-icons/ri"
import {ImMenu} from "react-icons/im";

const MobileNavigation = () => {
const [showNav, setShowNav]= useState(false);

const handleNav=()=>{
    setShowNav(!showNav);
}

console.log(showNav);

const {logOutUser}= useGlobalContext();

  return (
    <div className='mobile-navigation block lg:hidden items-center gap-[2rem]'>
        <button onClick={handleNav} className='w-full text-center text-white bg-zinc-400 rounded flex items-center justify-center py-1 my-2'>{showNav?<RiCloseFill/>:<ImMenu/>}Menu</button>
        <div className={showNav?"block":"hidden"}>
        {links.map((item)=>{
            return <NavLink to={item.path} key={item.id} end className={({isActive})=>isActive?"flex items-center justify-center bg-cyan-600 text-white px-2 py-1 rounded gap-[5px] active":"flex justify-center my-3 items-center gap-[5px]"}>{item.icon}{item.text}</NavLink>
        })}
        <button onClick={logOutUser} className="flex items-center mx-auto gap-[5px] bg-red-500 text-white px-2 py-1 my-2 rounded hover:bg-red-600"> <RiLogoutBoxRFill/><span>Logout</span></button>
        </div>
    </div>
  )
}

export default MobileNavigation