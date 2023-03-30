import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Loading from "../components/Loading";
import StatCard from '../components/StatCard';

const Stats = () => {

  const {getStats, isLoading, expenseStats,incomeStats}= useGlobalContext();

  useEffect(()=>{
    getStats();
  },[])

  useEffect(()=>{
    console.log(incomeStats);
  },[])

  const {categoryStats:incomeCategoryStats,statusStats:incomeStatusStats,Amount:IncomeAmount}=incomeStats;
  const {categoryStats:expenseCategoryStats,statusStats:expenseStatusStats,Amount:ExpenseAmount}=expenseStats;
  

  if(isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
        <div className="income-stats bg-green-300">
            {IncomeAmount}

            {incomeCategoryStats && Object.values(incomeCategoryStats).map((item,index)=>{
                return (
                  <StatCard {...item}/>
                )
            })}

          {incomeStatusStats && Object.values(incomeStatusStats).map((item,index)=>{
                return (
                  <StatCard {...item}/>
                )
            })}

        </div>

        <div className="income-stats bg-red-300">
            {ExpenseAmount}

            {expenseCategoryStats && Object.values(expenseCategoryStats).map((item,index)=>{
                return (
                  <StatCard {...item}/>
                )
            })}

            {expenseStatusStats && Object.values(expenseStatusStats).map((item,index)=>{
                return (
                  <StatCard {...item}/>
                )
            })}

        </div>
    </div>
  )
}

export default Stats