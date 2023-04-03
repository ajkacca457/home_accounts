import React from 'react'
import FormRow from "./FormRow";
import { incomeCategories,expenseCategories } from '../utilites/linkData';




const Filter = ({isIncome}) => {
    console.log(isIncome);
    const onHandleChange=(e)=> {
        console.log(e.target.value);
    }

  return (
    <div className='bg-white my-8 p-4 text-left'>
        <FormRow type="text" name="search" placeholderText={"Please enter what to search.."} labelText={"Search by transaction name"} handleChange={onHandleChange} />
    </div>
  )
}

export default Filter