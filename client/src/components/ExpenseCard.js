import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { NavLink } from 'react-router-dom';

const ExpenseCard = ({title,amount,status,information,category,_id:id}) => {

  const {deleteExpense, setExpenseEdit}= useGlobalContext();

  return (
    <div className='bg-white py-2 my-2 grid grid-cols-12'>
        <h1 className='col-span-2 place-self-center'>{title}</h1>
        <p className='col-span-2 place-self-center'>{status.toUpperCase()}</p>
        <p className='col-span-2 place-self-center'>{information}</p>
        <p className='col-span-2 place-self-center'>{category}</p>
        <p className='col-span-2 place-self-center'>{amount}</p>
        <NavLink to={`/dashboard/edit-expense/${id}`} className='col-span-1 bg-orange-300 w-fit h-fit px-2 py-1 rounded' onClick={()=>setExpenseEdit(id)}>Edit</NavLink>
        <button className='col-span-1 bg-red-400 w-fit h-fit px-2 py-1 rounded text-white' onClick={()=>{deleteExpense(id)}}>Delete</button>
    </div>
  )
}

export default ExpenseCard;