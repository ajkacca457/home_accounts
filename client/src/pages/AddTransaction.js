import React from 'react'
import AddForm from '../components/AddForm'

const AddTransaction = () => {
  return (
    <>
    <div className='w-full md:w-10/12 lg:w-9/12 mx-auto bg-white mt-8 rounded p-6'>
        <h1 className='bg-indigo-300 text-white text-center my-2 py-2 rounded'>Add Transaction</h1>
        <AddForm/>
    </div>
    </>
  )
}

export default AddTransaction