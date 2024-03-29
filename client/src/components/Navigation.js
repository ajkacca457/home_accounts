import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'
import { links } from '../utilites/linkData'
import {RiLogoutBoxRFill} from  "react-icons/ri"

const Navigation = () => {

const {logOutUser}= useGlobalContext();

  return (
    <div className='navigation hidden lg:flex items-center gap-[2rem]'>
        {links.map((item)=>{
            return <NavLink to={item.path} key={item.id} end className={({isActive})=>isActive?"flex items-center bg-cyan-600 text-white px-2 py-1 rounded gap-[5px] active":"flex items-center gap-[5px]"}>{item.icon}{item.text}</NavLink>
        })}
        <button onClick={logOutUser} className="flex items-center gap-[5px] bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"> <RiLogoutBoxRFill/><span>Logout</span></button>
    </div>
  )
}

export default Navigation