import React, { useState } from 'react'
import FormRow from './FormRow'

const AddForm = () => {

    const initialValues= {
        type:"income",
        title:"",
        information:"",
        amount:"",
    }


    const [formvalues,setFormValues]= useState(initialValues);

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("working form")
}

const handleChange=(e)=>{
    setFormValues({...formvalues,[e.target.name]:e.target.value});
    console.log(formvalues);
}

  return (
    <form onSubmit={handleSubmit}>
        <FormRow type={"text"} name={"title"} value={formvalues.title} labelText={"Title"} placeholderText={"Please enter title"} handleChange={handleChange}  />
        <FormRow type={"text"} name={"information"} value={formvalues.information} labelText={"Information"} placeholderText={"Please enter information"} handleChange={handleChange}  />
        <FormRow type={"number"} name={"amount"} value={formvalues.amount} labelText={"Amount"} placeholderText={"Please enter amount"} handleChange={handleChange}/>
        <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">Transaction Type</label>
        <select name="type" id="type" value={formvalues.type} onChange={handleChange} className="w-full py-2 px-2 border-2 rounded ">
           <option value="income">income</option>
           <option value="expense">expense</option> 
        </select>
    </form>
  )
}

export default AddForm