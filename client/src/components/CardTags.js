import React from 'react'

const CardTags = ({info:{cardClass,totalIncomes=null,totalExpenses=null}}) => {
  return (
    <div className={`${cardClass} grid grid-cols-12 text-white py-2`}>
        <p className='hidden md:block md:col-span-2 place-self-center'>Transaction</p>
        <p className='hidden md:block md:col-span-2 place-self-center'>Information</p>
        <p className='hidden md:block md:col-span-2 place-self-center'>Status</p>
        <p className='hidden md:block md:col-span-2 place-self-center'>Category</p>
        <p className='hidden md:block md:col-span-2 place-self-center'>Amount</p>
        {totalIncomes && <p className='col-span-full md:col-span-2 place-self-center'>{totalIncomes} transaction found</p>}
        {totalExpenses && <p className='col-span-full md:col-span-2 place-self-center'>{totalExpenses} transaction found</p>}
    </div>
  )
}

export default CardTags