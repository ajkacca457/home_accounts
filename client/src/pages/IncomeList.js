import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Loading from "../components/Loading";

const IncomeList = () => {
  const {isLoading,incomes,getIncomes}= useGlobalContext();

  useEffect(()=>{
    getIncomes();
  },[]);

  if(isLoading) {
    return <Loading/>
  }
  
  if(incomes.length===0) {
    return  <div className='bg-white my-8 p-4 text-center'>
              <h1>No transactions available..</h1>
            </div>
  }

  return (
    <div>
      {incomes && incomes.map((item)=>{
        return (
          <div key={item._id} className="bg-white my-2 p-4">
            <h4>{item.title}</h4>
            <p>{item.information}</p>
            <p>{item.status}</p> 
            <p>{item.amount}</p>
            <p>{item.category}</p>
          </div>
        )
      })}

    </div>
  )
}

export default IncomeList