import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Loading from "../components/Loading";
import IncomeCard from '../components/IncomeCard';
import CardTags from '../components/CardTags';
import Filter from '../components/Filter';

const IncomeList = () => {
  const {isLoading,incomes,getIncomes, totalIncomes,transactionQuery}= useGlobalContext();

  useEffect(()=>{
    getIncomes(transactionQuery);
  },[transactionQuery]);

  if(isLoading) {
    return <Loading/>
  }
  
  if(incomes.length===0) {
    return  <div className='bg-white my-8 p-4 text-center'>
              <h1>No transactions available..</h1>
            </div>
  }

  return (
    <div className='mt-10'>
      <Filter isIncome={true}/>

      <CardTags info={{cardClass:"bg-indigo-500",totalIncomes}}/>
      {incomes && incomes.map((item)=>{
        return (
           <IncomeCard key={item._id} {...item}/> 
        )
      })}

    </div>
  )
}

export default IncomeList