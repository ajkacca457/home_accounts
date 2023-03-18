import React from 'react';
import AccountLogo from "../assets/account_logo.svg";

const Header = () => {
  return (
    <div className= "text-center py-2 px-2 flex justify-between items-center">
        <img src={AccountLogo} alt="logo" className='w-[300px] h-[60px]'/>
        <h1>Header</h1>
    </div>
  )
}

export default Header