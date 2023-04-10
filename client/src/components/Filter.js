import React from 'react'
import FormRow from "./FormRow";
import { incomeCategories,expenseCategories } from '../utilites/linkData';
import { useGlobalContext } from '../context/GlobalContext';




const Filter = ({isIncome}) => {

    const {filterTitle,filterStatus,filterCategory,setFilter, isLoading}= useGlobalContext();

    const onHandleChange=(e)=> {
      if(isLoading) return;
      setFilter(e.target.name,e.target.value);
    }

  return (
    <div className='bg-white my-8 p-4 text-left'>
      <form>
        <h1 className='text-center text-lg font-bold'>Filter Transaction</h1>
        <FormRow type="text" name="title" placeholderText={"Please enter what to search.."} value={filterTitle} labelText={"Search by transaction name"} handleChange={onHandleChange}/>
        {isIncome &&
        <> 
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mt-6 mb-2">Category</label>
          <select name="category" id="category" value={filterCategory} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded">
                <option value="all">All</option>
                {incomeCategories.map((item,index)=>{
                    return <option value={item} key={index}>{item}</option>
                })}
          </select>
        </>
        }
        {isIncome &&
        <>
          <label htmlFor="status" className="block text-gray-700 text-sm font-bold mt-6 mb-2">Status</label>
          <select name="status" id="status" value={filterStatus} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded">
                  <option value="all">All</option>
                  <option value="received">received</option>
                  <option value="incoming">incoming</option> 
          </select>
        </>
        }
        {!isIncome &&
          <> 
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mt-6 mb-2">Category</label> 
          <select name="category" id="category" value={filterCategory} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded">
                <option value="all">All</option>
                {expenseCategories.map((item,index)=>{
                    return <option value={item} key={index}>{item}</option>
                })}
          </select>
          </>
        }

        {!isIncome&&
            <>
            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mt-6 mb-2">Status</label>
            <select name="status" id="status" value={filterStatus} onChange={onHandleChange} className="w-full py-2 px-2 border-2 rounded ">
              <option value="all">All</option>
              <option value="paid">paid</option>
              <option value="due">due</option> 
            </select>
            </>
        }
      </form>
    </div>
  )
}

export default Filter