import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'

const IncomeList = () => {
  const {getIncomes}= useGlobalContext();

  useEffect(()=>{
    getIncomes();
  },[]);

  return (
    <div>IncomeList</div>
  )
}

export default IncomeList