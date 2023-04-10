import React from 'react'
import { useGlobalContext } from '../context/GlobalContext';

const Pagination = ({buttons}) => {

    const {page:currentPage}= useGlobalContext();
    const buttonList= Array.from({length:buttons},(_,index)=>{
      return index+1;
    })

    const prevPage=()=>{
      console.log("previous page")
    }

    const nextPage= ()=>{
      console.log("next page")
    }

    return (
    <div className='my-2 flex justify-center gap-x-[10px]'>
      <button onClick={prevPage}>prev</button>
      {buttonList.map((item,index)=>{
        return <button key={index} className={currentPage===item?`bg-red-300 py-2 px-3`:`bg-blue-300 py-2 px-3`}>{item}</button>
      })}
      <button onClick={nextPage}>next</button>
    </div>
  )
}

export default Pagination