import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Loading from "../components/Loading";

const Stats = () => {

  const {getStats, isLoading, expenseStats,incomeStats}= useGlobalContext();

  useEffect(()=>{
    getStats();
  },[])


  console.log(incomeStats,expenseStats);

  if(isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      Will Show all the status
    </div>
  )
}

export default Stats