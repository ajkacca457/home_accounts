import React from 'react';
import Spinner from "../assets/Spinner.gif"

const Loading = () => {
  return (
    <div className='flex justify-center items-center gap-[10px] bg-white my-8 py-4'>
        <img src={Spinner} alt="" />
        <p>Loading...</p>
    </div>
  )
}

export default Loading;