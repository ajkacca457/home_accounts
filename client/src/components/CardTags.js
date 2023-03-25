import React from 'react'

const CardTags = ({bgclass}) => {
  return (
    <div className={`${bgclass} grid grid-cols-12 text-white py-2`}>
        <p className='col-span-2 place-self-center'>Transaction</p>
        <p className='col-span-2 place-self-center'>Status</p>
        <p className='col-span-2 place-self-center'>Information</p>
        <p className='col-span-2 place-self-center'>Category</p>
        <p className='col-span-2 place-self-center'>Amount</p>
    </div>
  )
}

export default CardTags