import React from 'react'
import { useGlobalContext } from '../context/GlobalContext';

const Pagination = ({buttons}) => {

    const {page:currentPage}= useGlobalContext();
    const buttonList= Array.from({length:buttons},(_,index)=>{
      return index+1;
    })
    console.log(buttonList);

    const prevPage=()=>{
      console.log("previous page")
    }

    const nextPage= ()=>{
      console.log("next page")
    }

    return (
    <div className='bg-indigo-300 my-2 p-2 flex justify-center gap-x-[10px]'>
      <button onClick={prevPage}>prev</button>
      {buttonList.map((item,index)=>{
        return <button key={index}>{item}</button>
      })}
      <button onClick={nextPage}>next</button>
    </div>
  )
}

export default Pagination