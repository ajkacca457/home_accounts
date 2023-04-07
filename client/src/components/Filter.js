import React from 'react'
import FormRow from "./FormRow";
import { incomeCategories,expenseCategories } from '../utilites/linkData';
import { useGlobalContext } from '../context/GlobalContext';




const Filter = ({isIncome}) => {

    const {filterTitle,filterStatus,filterCategory,setFilter}= useGlobalContext();

    const onHandleChange=(e)=> {
      setFilter(e.target.name,e.target.value);
    }

  return (
    <div className='bg-white my-8 p-4 text-left'>
      <form>
        <FormRow type="text" name="title" placeholderText={"Please enter what to search.."} value={filterTitle} labelText={"Search by transaction name"} handleChange={onHandleChange}/>
        {isIncome && 
          <select name="category" id="category" value={filterCategory} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded">
                <option value="all">All</option>
                {incomeCategories.map((item,index)=>{
                    return <option value={item} key={index}>{item}</option>
                })}
          </select>
        }
        {isIncome &&
          <select name="status" id="status" value={filterStatus} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded my-6">
                  <option value="all">All</option>
                  <option value="received">received</option>
                  <option value="incoming">incoming</option> 
          </select>
        }
        {!isIncome && 
          <select name="category" id="category" value={filterCategory} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded my-4">
                <option value="all">All</option>
                {expenseCategories.map((item,index)=>{
                    return <option value={item} key={index}>{item}</option>
                })}
          </select>
        }

        {!isIncome&&
            <select name="status" id="status" value={filterStatus} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded ">
              <option value="all">All</option>
              <option value="paid">paid</option>
              <option value="due">due</option> 
            </select>
        }
      </form>
    </div>
  )
}

export default Filter