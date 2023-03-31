import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Loading from "../components/Loading";
import StatCard from '../components/StatCard';

const Stats = () => {

  const {getStats, isLoading, expenseStats,incomeStats}= useGlobalContext();

  useEffect(()=>{
    getStats();
  },[])

  const {categoryStats:incomeCategoryStats,statusStats:incomeStatusStats,Amount:IncomeAmount}=incomeStats;
  const {categoryStats:expenseCategoryStats,statusStats:expenseStatusStats,Amount:ExpenseAmount}=expenseStats;
  

  if(isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
        <div className="income-stats grid grid-cols-12 gap-x-[10px]">
            <div className='col-span-full flex justify-between px-4'>
              <h1>Income category statistics</h1>
              <h1>{IncomeAmount}</h1>
            </div>
            <div className='col-span-full grid grid-cols-12 gap-x-[10px]'>
            {incomeCategoryStats && Object.values(incomeCategoryStats).map((item,index)=>{
                return (
                  <StatCard {...item} bgclass={"bg-green-300"} key={index}/>
                )
            })}
            </div>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 col-span-full" />

            <div className='col-span-full flex justify-between px-4'>
              <h1>Income status statistics</h1>
              <h1>{IncomeAmount}</h1>
            </div>

            <div className='col-span-full grid grid-cols-12 gap-x-[10px]'>
            {incomeStatusStats && Object.values(incomeStatusStats).map((item,index)=>{
                return (
                  <StatCard {...item} bgclass={"bg-green-300"} key={index} icon={<div>hello</div>}/>
                )
            })}
            </div>

        </div>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className="expenese-stats grid grid-cols-12 gap-x-[10px]">

            <div className='col-span-full flex justify-between px-4'>
              <h1>Expense category statistics</h1>
              <h1>{ExpenseAmount}</h1>
            </div>
            {expenseCategoryStats && Object.values(expenseCategoryStats).map((item,index)=>{
                return (
                  <StatCard {...item} bgclass={"bg-red-300"} key={index}/>
                )
            })}
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            {expenseStatusStats && Object.values(expenseStatusStats).map((item,index)=>{
                return (
                  <StatCard {...item} bgclass={"bg-red-400"} key={index}/>
                )
            })}

        </div>
    </div>
  )
}

export default Stats