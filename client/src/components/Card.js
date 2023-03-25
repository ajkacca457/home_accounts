import React from 'react'

const Card = ({title,amount,status,information,category}) => {

  return (
    <div className='bg-white py-2 my-2 grid grid-cols-12'>
        <h1 className='col-span-2 place-self-center'>{title}</h1>
        <p className='col-span-2 place-self-center'>{status}</p>
        <p className='col-span-2 place-self-center'>{information}</p>
        <p className='col-span-2 place-self-center'>{category}</p>
        <p className='col-span-2 place-self-center'>{amount}</p>
        <button className='col-span-1 bg-orange-300 w-fit h-fit px-2 py-1 rounded'>Edit</button>
        <button className='col-span-1 bg-red-400 w-fit h-fit px-2 py-1 rounded text-white'>Delete</button>
    </div>
  )
}

export default Card