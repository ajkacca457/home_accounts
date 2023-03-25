import React from 'react'

const Card = ({title,amount,status,information,category}) => {

  return (
    <div className='bg-white p-4 my-2 grid grid-cols-12'>
        <h1 className='col-span-2 place-self-center'>{title}</h1>
        <p className='col-span-2 place-self-center'>{status}</p>
        <p className='col-span-2 place-self-center'>{information}</p>
        <p className='col-span-2 place-self-center'>{category}</p>
        <p className='col-span-2 place-self-center'>{amount}</p>
    </div>
  )
}

export default Card