import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Loading from "../components/Loading";
import Card from '../components/Card';
import CardTags from '../components/CardTags';

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
      <CardTags bgclass={"bg-indigo-500"}/>
      {incomes && incomes.map((item)=>{
        return (
           <Card key={item._id} {...item}/> 
        )
      })}

    </div>
  )
}

export default IncomeList