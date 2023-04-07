import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import Loading from '../components/Loading';
import ExpenseCard from '../components/ExpenseCard';
import CardTags from '../components/CardTags';
import Filter from '../components/Filter';

const ExpenseList = () => {
  const {isLoading,getExpenses,expenses,totalExpenses,filterStatus,filterCategory,filterTitle}= useGlobalContext();
  useEffect(()=>{
    getExpenses()
  },[filterStatus,filterCategory,filterTitle])

  if(isLoading) {
    return <Loading/>
  }
  
  if(expenses.length===0) {
    return  <div>
              <Filter isIncome={false}/>
              <div className='bg-white my-8 p-4 text-center'>
                <h1>No transactions available..</h1>
              </div>
            </div>
  }

  return (
    <div className='mt-10'>
      <Filter isIncome={false}/>
      <CardTags  info={{cardClass:"bg-red-500",totalExpenses}}/>
      {expenses && expenses.map((item)=>{
        return (
            <ExpenseCard key={item._id} {...item}/>
        )
      })}

    </div>
  )
}

export default ExpenseList