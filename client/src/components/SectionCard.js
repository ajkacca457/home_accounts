import React from 'react'

const SectionCard = ({cardImage,left,info,title}) => {

  return (
    <div className="image-card grid grid-cols-12 items-center">
        <div className={`col-span-6 ${left?"order-2":""}`}>
            <h1 className='font-heading'>{title.toUpperCase()}</h1>
            <p>{info}</p>
        </div>
        <img src={cardImage} alt="" className='col-span-6'/>
    </div>  )
}

export default SectionCard