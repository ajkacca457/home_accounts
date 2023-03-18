import React from 'react'

const SectionCard = (props) => {
    console.log(props);

  return (
    <div className="image-card grid grid-cols-12 items-center">
        <div className='col-span-6'>
            <h1 className='font-heading'>Lorem ipsum dolor</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dolor unde suscipit tempore eveniet maxime! Asperiores eligendi molestias sit libero?</p>
        </div>
        <img src="" alt="" className='col-span-6'/>
    </div>  )
}

export default SectionCard