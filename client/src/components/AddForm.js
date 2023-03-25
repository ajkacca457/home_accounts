import React, { useState } from 'react'
import FormRow from './FormRow'

const AddForm = () => {

    const initialValues= {
        type:"income",
        title:"",
        information:"",
        amount:"",
        category:"",
        status:""
    }


    const [formvalues,setFormValues]= useState(initialValues);
    console.log(formvalues.type);

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("working form")
}

const handleChange=(e)=>{
    setFormValues({...formvalues,[e.target.name]:e.target.value});
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

        {formvalues.type && formvalues.type==="income"?
            <>
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mt-6 mb-2">Category</label>
            <select name="category" id="category" value={formvalues.category} onChange={handleChange} className="w-full py-2 px-2 border-2 rounded ">
                <option value="received">received</option>
                <option value="incoming">incoming</option> 
             </select>
             <label htmlFor="status" className="block text-gray-700 text-sm font-bold mt-6 mb-2">Status</label>
            <select name="status" id="status" value={formvalues.status} onChange={handleChange} className="w-full py-2 px-2 border-2 rounded ">
                <option value="received">received</option>
                <option value="incoming">incoming</option> 
            </select>
            </>:
            <>
            <select name="type" id="type" value={formvalues.category} onChange={handleChange} className="w-full py-2 px-2 border-2 rounded ">
                <option value="income">income</option>
                <option value="expense">expense</option> 
            </select>
            <select name="type" id="type" value={formvalues.status} onChange={handleChange} className="w-full py-2 px-2 border-2 rounded ">
                <option value="income">income</option>
                <option value="expense">expense</option> 
            </select>
            </>
            }

    </form>
  )
}

export default AddForm