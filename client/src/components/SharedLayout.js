import React from 'react';
import { Outlet } from 'react-router-dom';
import AccountLogo from "../assets/account_logo.svg";
import Navigation from './Navigation';

const SharedLayout = () => {
  return (
    <div>
        <div className="text-center py-2 px-2 flex justify-between items-center">
            <img src={AccountLogo} alt="logo" className='w-[300px] h-[60px]'/>
            <Navigation/>
        </div>
        <Outlet/>    
    </div>
    
  )
}

export default SharedLayout