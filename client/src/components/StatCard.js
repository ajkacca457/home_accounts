import React from 'react'

const StatCard = ({title,amount,count,bgclass}) => {
  return (
    <div className="p-4 hover:scale-105 duration-500 col-span-6">
    <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
      <div>
        <h3 className="mt-2 text-xl font-bold text-orange-500 text-left">{amount}</h3>
        <p className="text-sm font-semibold text-gray-400">Number of transaction: {count}</p>
      </div>
      <div
        className="bg-gradient-to-tr from-orange-500 to-orange-400 w-32 h-32  rounded-full shadow-2xl shadow-orange-400 border-white  border-dashed border-2  flex justify-center items-center ">
        <div>
          <h1 className="text-white text-2xl">{title}</h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default StatCard