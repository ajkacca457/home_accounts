import React from 'react'
import FormRow from './FormRow'

const AddForm = () => {

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("working form")
}

const handleChange=(e)=>{
    console.log(e.target.value);
}

  return (
    <form onSubmit={handleSubmit}>
        <FormRow type={"text"} name={"title"} value={"title"} labelText={"Title"} placeholderText={"Please enter title"} handleChange={handleChange}  />
        <FormRow type={"text"} name={"information"} value={"information"} labelText={"Information"} placeholderText={"Please enter information"} handleChange={handleChange}  />
        <FormRow type={"number"} name={"amount"} value={"amount"} labelText={"Amount"} placeholderText={"Please enter amount"} handleChange={handleChange}  />

    </form>
  )
}

export default AddForm