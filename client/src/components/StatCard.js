import React from 'react'

const StatCard = ({title,amount,count,bgclass}) => {
  return (
    <div className={`${bgclass} my-2`}>
    <h1>{title}</h1>
    <p>{amount}</p>
    <p>{count}</p>
  </div>
  )
}

export default StatCard