import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'

const Alert = () => {
  const {alertClasses,alertText}=useGlobalContext();

  return (
    <div className={`text-center ${alertClasses} my-4 py-2 rounded`}>{alertText}</div>
  )
}

export default Alert