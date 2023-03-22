import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'
import { links } from '../utilites/linkData'

const Navigation = () => {

const {logOutUser}= useGlobalContext();

  return (
    <div className='navigation flex items-center gap-[2rem]'>
        {links.map((item)=>{
            return <NavLink to={item.path} key={item.id} end className={({isActive})=>isActive?"flex items-center bg-cyan-600 text-white px-2 py-1 rounded gap-[5px] active":"flex items-center gap-[5px]"}>{item.icon}{item.text}</NavLink>
        })}
        <button onClick={logOutUser}>Logout</button>
    </div>
  )
}

export default Navigation