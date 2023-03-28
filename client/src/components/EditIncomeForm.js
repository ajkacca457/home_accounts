import React, { useState } from 'react'
import FormRow from './FormRow';
import { incomeCategories,expenseCategories } from '../utilites/linkData';
import { useGlobalContext } from '../context/GlobalContext';
import {useNavigate} from "react-router-dom";

const EditIncomeForm = () => {

    const initialValues= {
        type:"income",
        title:"",
        information:"",
        amount:"",
        category:"",
        status:""
    }


    const [formvalues,setFormValues]= useState(initialValues);

    const {addTransaction,displayAlert}= useGlobalContext();

    const navigate= useNavigate(); 

const handleSubmit=(e)=>{
    e.preventDefault();
    const {title,information,amount,category,status,type}= formvalues;

    if(!title||!information||!amount||!category||!status) {
        displayAlert("bg-red-400 text-white","please fill all the fields");
        return;
    }

    const transaction= {
        title,
        information,
        amount,
        category,
        status
    }


}

const handleChange=(e)=>{
    setFormValues({...formvalues,[e.target.name]:e.target.value});
}

  return (
    <div className='w-9/12 mx-auto bg-white mt-8 rounded p-6'>
        <h1 className='bg-indigo-300 text-white text-center my-2 py-2 rounded'>Edit Transaction</h1>
        <form onSubmit={handleSubmit}>
            <FormRow type={"text"} name={"title"} value={formvalues.title} labelText={"Title"} placeholderText={"Please enter title"} handleChange={handleChange}  />
            <FormRow type={"text"} name={"information"} value={formvalues.information} labelText={"Information"} placeholderText={"Please enter information"} handleChange={handleChange}  />
            <FormRow type={"number"} name={"amount"} value={formvalues.amount} labelText={"Amount"} placeholderText={"Please enter amount"} handleChange={handleChange}/>

            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mt-6 mb-2">Category</label>
            <select name="category" id="category" value={formvalues.category} onChange={handleChange} className="w-full py-2 px-2 border-2 rounded ">
                {formvalues.category===""?<option hidden>Select Category..</option>:""}
                {incomeCategories.map((item,index)=>{
                    return <option value={item} key={index}>{item}</option>
                })}
            </select>
            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mt-6 mb-2">Status</label>
            <select name="status" id="status" value={formvalues.status} onChange={handleChange} className="w-full py-2 px-2 border-2 rounded ">
                {formvalues.status===""?<option hidden>Select Status..</option>:""}
                <option value="received">received</option>
                <option value="incoming">incoming</option> 
            </select>

            <button className="btn-primary disabled:opacity-75 disabled:bg-slate-400 my-6" type="submit" >Submit</button>
        </form>
    </div>
  )
}

export default EditIncomeForm;