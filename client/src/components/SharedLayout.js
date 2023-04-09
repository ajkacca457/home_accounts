import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AccountLogo from "../assets/account_logo.svg";
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import Alert from './Alert';
import { useGlobalContext } from '../context/GlobalContext';


const SharedLayout = () => {

  const {showAlert, displayAlert, user}= useGlobalContext();

  useEffect(()=>{
    displayAlert("bg-green-400 text-white",`Welcome ${user.firstname}`);  
  },[user])  

  return (
    <div>
        <div className="text-center py-2 px-2 flex justify-between items-center">
            <img src={AccountLogo} alt="logo" className='w-[300px] h-[60px]'/>
            <Navigation/>
        </div>
        <MobileNavigation/>

        {showAlert && <Alert/>}
        <Outlet/>    
    </div>
    
  )
}

export default SharedLayout