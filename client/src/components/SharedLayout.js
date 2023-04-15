import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AccountLogo from "../assets/account_logo.svg";
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import Alert from './Alert';
import { useGlobalContext } from '../context/GlobalContext';


const SharedLayout = () => {

  const {showAlert, user}= useGlobalContext(); 

  const [showWelcome, setShowWelcome]=useState(false);

  useEffect(()=>{
    setShowWelcome(true);
    setTimeout(()=>{
      setShowWelcome(false);
    },3000)
  },[])

  return (
    <div>
        <div className="text-center py-2 px-2 flex justify-between items-center">
            <img src={AccountLogo} alt="logo" className='w-[300px] h-[60px]'/>
            <Navigation/>
        </div>
        <MobileNavigation/>
        {user && showWelcome && <h1 className='text-center text-2xl'>Welcome,{" "}{user.firstname}</h1>}
        {showAlert && <Alert/>}
        <Outlet/>    
    </div>
    
  )
}

export default SharedLayout