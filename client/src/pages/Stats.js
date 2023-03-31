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
            <div className='col-span-full flex justify-between px-4 bg-purple-600 text-white my-4 py-2 rounded'>
              <h2 className='text-lg'>Income from different category</h2>
              <h2 className='text-lg'>Total : {IncomeAmount}{"£"}</h2>
            </div>
            <div className='col-span-full grid grid-cols-12 gap-x-[10px]'>
            {incomeCategoryStats && Object.values(incomeCategoryStats).map((item,index)=>{
                return (
                  <StatCard {...item} bgclass={"bg-green-400"} key={index}/>
                )
            })}
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 col-span-full" />

            <div className='col-span-full flex justify-between px-4 bg-purple-600 text-white my-4 py-2 rounded'>
              <h2 className='text-lg'>Status of Income</h2>
              <h2 className='text-lg'> Total : {IncomeAmount}{"£"}</h2>
            </div>

            <div className='col-span-full grid grid-cols-12 gap-x-[10px]'>
            {incomeStatusStats && Object.values(incomeStatusStats).map((item,index)=>{
                return (
                  <StatCard {...item} bgclass={"bg-green-400"} key={index} icon={<div>hello</div>}/>
                )
            })}
            </div>

        </div>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className="expenese-stats grid grid-cols-12 gap-x-[10px]">

            <div className='col-span-full flex justify-between px-4 bg-purple-600 text-white my-4 py-2 rounded'>
              <h2 className='text-lg'>Category wise expense</h2>
              <h2 className='text-lg'>Total : {ExpenseAmount}{"£"}</h2>
            </div>

            <div className='col-span-full grid grid-cols-12 gap-x-[10px]'>
            {expenseCategoryStats && Object.values(expenseCategoryStats).map((item,index)=>{
                return (
                  <StatCard {...item} bgclass={"bg-red-400"} key={index}/>
                )
            })}
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 col-span-full" />

            
            <div className='col-span-full flex justify-between px-4 bg-purple-600 text-white my-4 py-2 rounded'>
              <h2 className='text-lg'>Status of expenses</h2>
              <h2 className='text-lg'>Total : {ExpenseAmount}{"£"}</h2>
            </div>

            <div className='col-span-full grid grid-cols-12 gap-x-[10px]'>
            {expenseStatusStats && Object.values(expenseStatusStats).map((item,index)=>{
                return (
                  <StatCard {...item} bgclass={"bg-red-400"} key={index}/>
                )
            })}
            </div>

        </div>
    </div>
  )
}

export default Stats