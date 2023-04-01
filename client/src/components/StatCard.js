import React from 'react'

const StatCard = ({title,amount,count,icon}) => {

  return (
    <div className="p-2 hover:scale-105 duration-500 col-span-4">
    <div className=" flex items-center  justify-between px-4 py-2  rounded-lg bg-white shadow-indigo-50 shadow-md">
      <div>
        <h2 className='bg-cyan-600 text-center rounded'>{title}</h2>
        <h3 className="mt-2 text-3xl font-bold text-orange-500 text-left">{amount}{"£"}</h3>
        <p className="text-lg font-semibold text-gray-400">Number of transaction: {count}</p>
      </div>
      <div
        className={`bg-red-300 from-orange-500 to-orange-400 w-24 h-24  rounded-full shadow-2xl border-white  border-dashed border-2  flex justify-center items-center`}>
        <div className='text-4xl text-white'>
          {icon}
        </div>
      </div>
    </div>
    </div>
  )
}

export default StatCard