import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'

const Navigation = () => {

const {logOutUser}= useGlobalContext();

  return (
    <div className='navigation'>
        <NavLink to="/dashboard">Stats</NavLink>
        <NavLink to="/dashboard/incomes">Incomes</NavLink>
        <NavLink to="/dashboard/expenses">Expenses</NavLink>
        <button onClick={logOutUser}>Logout</button>
    </div>
  )
}

export default Navigation