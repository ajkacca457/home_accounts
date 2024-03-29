import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Loading from "../components/Loading";
import StatCard from '../components/StatCard';
import PieChart3d from '../components/Pie3d';
import PieChart2d from '../components/Pie2d';
import BarChart2d from '../components/Bar2d';
import DoughnutChart2d from '../components/Doughnut';
import { returnChartData,returnIncomeCardData, returnExpenseCardData, returnStatsCard } from '../utilites/utilsFunc';

const Stats = () => {

  const {getStats, isLoading, expenseStats,incomeStats}= useGlobalContext();

  useEffect(()=>{
    getStats();
  },[])

  const {categoryStats:incomeCategoryStats,statusStats:incomeStatusStats,Amount:IncomeAmount}=incomeStats;
  const {categoryStats:expenseCategoryStats,statusStats:expenseStatusStats,Amount:ExpenseAmount}=expenseStats;
  
  const icStats= returnIncomeCardData(incomeCategoryStats);
  const ecStats= returnExpenseCardData(expenseCategoryStats);
  const isStats= returnStatsCard("income",incomeStatusStats);
  const esStats= returnStatsCard("expense",expenseStatusStats);


  const incomeCategoryData=returnChartData(incomeCategoryStats);
  const incomeStatusData=returnChartData(incomeStatusStats);
  const expenseCategoryData=returnChartData(expenseCategoryStats);
  const expenseStatusData=returnChartData(expenseStatusStats);


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
            {icStats && icStats.map((item)=>{
                return (
                  <StatCard {...item} key={item.id}/>
                )
            })}
            </div>

            {incomeCategoryData.length>0?<PieChart3d data={incomeCategoryData}></PieChart3d>:<h1 className='col-span-full text-3xl text-center'>No income so far!!Statistic not available.</h1>}
            

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 col-span-full" />

            <div className='col-span-full flex justify-between px-4 bg-purple-600 text-white my-4 py-2 rounded'>
              <h2 className='text-lg'>Status of Income</h2>
              <h2 className='text-lg'> Total : {IncomeAmount}{"£"}</h2>
            </div>

            <div className='col-span-full grid grid-cols-12 gap-x-[10px]'>
            {isStats && isStats.map((item)=>{
                return (
                  <StatCard {...item} key={item.id}/>
                )
            })}
            </div>

            {incomeStatusData.length>0?<PieChart2d data={incomeStatusData}></PieChart2d>:<h1 className='col-span-full text-3xl text-center'>No income so far!!Statistic not available.</h1>}


        </div>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className="expenese-stats grid grid-cols-12 gap-x-[10px]">

            <div className='col-span-full flex justify-between px-4 bg-purple-600 text-white my-4 py-2 rounded'>
              <h2 className='text-lg'>Category wise expense</h2>
              <h2 className='text-lg'>Total : {ExpenseAmount}{"£"}</h2>
            </div>

            <div className='col-span-full grid grid-cols-12 gap-x-[10px]'>
            {ecStats && ecStats.map((item)=>{
                return (
                  <StatCard {...item} key={item.id}/>
                )
            })}
            </div>

            {expenseCategoryData.length>0?<BarChart2d data={expenseCategoryData}></BarChart2d>:<h1 className='col-span-full text-3xl text-center'>No expenses so far!!Statistic not available.</h1>}

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 col-span-full" />

            
            <div className='col-span-full flex justify-between px-4 bg-purple-600 text-white my-4 py-2 rounded'>
              <h2 className='text-lg'>Status of expenses</h2>
              <h2 className='text-lg'>Total : {ExpenseAmount}{"£"}</h2>
            </div>

            <div className='col-span-full grid grid-cols-12 gap-x-[10px]'>
            {esStats && esStats.map((item)=>{
                return (
                  <StatCard {...item} key={item.id}/>
                )
            })}
            </div>

            {expenseStatusData.length>0?<DoughnutChart2d data={expenseStatusData}></DoughnutChart2d>:<h1 className='col-span-full text-3xl text-center'>No expenses so far!!Statistic not available.</h1>}

        </div>
    </div>
  )
}

export default Stats