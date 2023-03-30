import React from 'react'

const StatCard = ({title,amount,count,bgclass}) => {
  return (
    <div className="p-4 w-2/4 hover:scale-105 duration-500">
    <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
      <div>
        <h2 className="text-gray-900 text-lg font-bold">Total Ballance</h2>
        <h3 className="mt-2 text-xl font-bold text-orange-500 text-left">+ 150.000 ₭</h3>
        <p className="text-sm font-semibold text-gray-400">Last Transaction</p>
        <button className="text-sm mt-6 px-4 py-2 bg-orange-400  text-white rounded-lg  tracking-wider hover:bg-orange-500 outline-none">Add to cart</button>
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