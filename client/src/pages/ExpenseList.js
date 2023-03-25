import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import Loading from '../components/Loading';
import Card from '../components/Card';

const ExpenseList = () => {
  const {isLoading,getExpenses,expenses}= useGlobalContext();

  console.log(expenses);

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
    <div>
      {expenses && expenses.map((item)=>{
        return (
            <Card key={item._id} {...item}/>
        )
      })}

    </div>
  )
}

export default ExpenseList