import React from 'react'

const CardTags = ({info:{cardClass,totalIncomes=null,totalExpenses=null}}) => {
  return (
    <div className={`${cardClass} grid grid-cols-12 text-white py-2`}>
        <p className='col-span-2 place-self-center'>Transaction</p>
        <p className='col-span-2 place-self-center'>Status</p>
        <p className='col-span-2 place-self-center'>Information</p>
        <p className='col-span-2 place-self-center'>Category</p>
        <p className='col-span-2 place-self-center'>Amount</p>
        {totalIncomes && <p className='col-span-2 place-self-center'>{totalIncomes} transactions found</p>}
        {totalExpenses && <p className='col-span-2 place-self-center'>{totalExpenses} transactions found</p>}
    </div>
  )
}

export default CardTags