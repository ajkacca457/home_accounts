import React, { useState } from 'react'
import FormRow from "./FormRow";
import { incomeCategories,expenseCategories } from '../utilites/linkData';




const Filter = ({isIncome}) => {

    const [values,setFormValues]= useState({
      search:"",
      category:"",
      status:""
    })

    const onHandleChange=(e)=> {
      const {search,category,status}=values;
      setFormValues({...values,[e.target.name]:e.target.value});
      let query="?";
      if(search!=="") {
        query =`search=${search}`;
      }
      if(category) {
        if(search!=="") {
          query=`${query}&category=${category}`;
        } else {
          query=`category=${category}`;
        }
      }

      if(status) {
        if(search!==""||category!=="") {
          query=`${query}&status=${status}`;  
        } else {
          query=`status=${status}`;
        }

      }

      console.log(query);

    }

    console.log(values);

  return (
    <div className='bg-white my-8 p-4 text-left'>
        <FormRow type="text" name="search" placeholderText={"Please enter what to search.."} value={values.search} labelText={"Search by transaction name"} handleChange={onHandleChange} />
        {isIncome && 
          <select name="category" id="category" value={values.category} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded">
                {/* {formvalues.category===""?<option hidden>Select Category..</option>:""} */}
                {incomeCategories.map((item,index)=>{
                    return <option value={item} key={index}>{item}</option>
                })}
          </select>
        }
        {isIncome &&
          <select name="status" id="status" value={values.status} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded my-6">
              {/* {formvalues.status===""?<option hidden>Select Status..</option>:""} */}
                  <option value="received">received</option>
                  <option value="incoming">incoming</option> 
          </select>
        }
        {!isIncome && 
          <select name="category" id="category" value={values.category} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded my-4">
                {/* {formvalues.category===""?<option hidden>Select Category..</option>:""} */}
                {expenseCategories.map((item,index)=>{
                    return <option value={item} key={index}>{item}</option>
                })}
          </select>
        }

        {!isIncome&&
            <select name="status" id="status" value={values.status} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded ">
            {/* {formvalues.status===""?<option hidden>Select Status..</option>:""} */}
              <option value="paid">paid</option>
              <option value="due">due</option> 
            </select>
        }

    </div>
  )
}

export default Filter