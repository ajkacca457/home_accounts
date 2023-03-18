import React from 'react'
import AccountLogo from "../assets/account_logo.svg";

const Home = () => {
  return (
    <div className='home'>
        <div className="text-center py-2 px-2 flex justify-between items-center">
            <img src={AccountLogo} alt="logo" className='w-[300px] h-[60px]'/>
            <button className='btn-primary'>Login/Register</button>
        </div>

    </div>
  )
}

export default Home