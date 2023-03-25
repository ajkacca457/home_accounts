import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Loading from "../components/Loading";
import IncomeCard from '../components/IncomeCard';
import CardTags from '../components/CardTags';
import Alert from "../components/Alert";

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
    <div className='mt-10'>
      <Alert/>
      <CardTags bgclass={"bg-indigo-500"}/>
      {incomes && incomes.map((item)=>{
        return (
           <IncomeCard key={item._id} {...item}/> 
        )
      })}

    </div>
  )
}

export default IncomeList