import React from 'react'
import AccountLogo from "../assets/account_logo.svg";
import SectionCard from '../components/SectionCard';
import { cardDetails } from '../utilites/cardData';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
        <div className="text-center py-2 px-2 flex justify-between items-center">
            <img src={AccountLogo} alt="logo" className='w-[300px] h-[60px]'/>
            <NavLink to="/auth" className='btn-primary'>Login/Register</NavLink>
        </div>

        {cardDetails.length>0 && cardDetails.map((item,index)=> {
            return (<SectionCard {...item} key={index}/>)
        }) }
    </div>
  )
}

export default Home