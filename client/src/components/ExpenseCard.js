import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { NavLink } from 'react-router-dom';

const ExpenseCard = ({title,amount,status,information,category,_id:id}) => {

  const {deleteExpense, setExpenseEdit}= useGlobalContext();

  return (
    <div className='bg-white px-2 py-2 my-2 grid grid-cols-12 gap-[10px]'>
        <h1 className='col-span-full md:col-span-2 place-self-start md:place-self-center underline md:no-underline'>{title}</h1>
        <p className='col-span-full md:col-span-2 place-self-start md:place-self-center'>{information}</p>
        <p className='col-span-4 md:col-span-2 place-self-start md:place-self-center'><span className='inline md:hidden'>Status:{" "}</span>{status.toUpperCase()}</p>
        <p className='col-span-4 md:col-span-2 place-self-start md:place-self-center'><span className='inline md:hidden'>Category:{" "}</span>{category}</p>
        <p className='col-span-4 md:col-span-2 place-self-start md:place-self-center'><span className='inline md:hidden'>Amount:{" "}</span>{amount}</p>        
        <NavLink to={`/dashboard/edit-expense/${id}`} className='col-span-6 md:col-span-1 bg-orange-300 w-full md:w-fit h-fit px-2 py-1 rounded text-center' onClick={()=>setExpenseEdit(id)}>Edit</NavLink>
        <button className='col-span-6 md:col-span-1 bg-red-400 w-full md:w-fit h-fit px-2 py-1 rounded text-white' onClick={()=>{deleteExpense(id)}}>Delete</button>
    </div>
  )
}

export default ExpenseCard;