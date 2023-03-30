import React from 'react'

const StatCard = ({title,amount,count}) => {
  return (
    <div>
    <h1>{title}</h1>
    <p>{amount}</p>
    <p>{count}</p>
  </div>
  )
}

export default StatCard