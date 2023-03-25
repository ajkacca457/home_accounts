import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import Loading from '../components/Loading';
import ExpenseCard from '../components/ExpenseCard';
import CardTags from '../components/CardTags';
import Alert from '../components/Alert';

const ExpenseList = () => {
  const {isLoading,getExpenses,expenses}= useGlobalContext();
  useEffect(()=>{
    getExpenses()
  },[])

  if(isLoading) {
    return <Loading/>
  }
  
  if(expenses.length===0) {
    return  <div className='bg-white my-8 p-4 text-center'>
              <h1>No transactions available..</h1>
            </div>
  }

  return (
    <div className='mt-10'>
      <Alert/>
      <CardTags  bgclass={"bg-red-500"}/>
      {expenses && expenses.map((item)=>{
        return (
            <ExpenseCard key={item._id} {...item}/>
        )
      })}

    </div>
  )
}

export default ExpenseList