import React from 'react'
import FormRow from "./FormRow";
import { incomeCategories,expenseCategories } from '../utilites/linkData';




const Filter = ({isIncome}) => {
    const onHandleChange=(e)=> {
        console.log(e.target.value);
    }

  return (
    <div className='bg-white my-8 p-4 text-left'>
        <FormRow type="text" name="search" placeholderText={"Please enter what to search.."} labelText={"Search by transaction name"} handleChange={onHandleChange} />
        {isIncome && 
          <select name="category" id="category" value={""} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded">
                {/* {formvalues.category===""?<option hidden>Select Category..</option>:""} */}
                {incomeCategories.map((item,index)=>{
                    return <option value={item} key={index}>{item}</option>
                })}
          </select>
        }
        {isIncome &&
          <select name="status" id="status" value={""} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded my-6">
              {/* {formvalues.status===""?<option hidden>Select Status..</option>:""} */}
                  <option value="received">received</option>
                  <option value="incoming">incoming</option> 
          </select>
        }
        {!isIncome && 
          <select name="category" id="category" value={""} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded my-4">
                {/* {formvalues.category===""?<option hidden>Select Category..</option>:""} */}
                {expenseCategories.map((item,index)=>{
                    return <option value={item} key={index}>{item}</option>
                })}
          </select>
        }

        {!isIncome&&
            <select name="status" id="status" value={""} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded ">
            {/* {formvalues.status===""?<option hidden>Select Status..</option>:""} */}
              <option value="paid">paid</option>
              <option value="due">due</option> 
            </select>
        }

    </div>
  )
}

export default Filter