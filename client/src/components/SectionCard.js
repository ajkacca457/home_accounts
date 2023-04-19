import React from 'react';

const SectionCard = ({ cardImage, left, info, title }) => {

    return (
        <div className="image-card grid grid-cols-12 gap-x-4 items-center w-5/6 mx-auto my-16">
            <div className={`col-span-6 ${left ? "order-2" : ""}`}>
                <h1 className='font-heading text-xl'>{title.toUpperCase()}</h1>
                <p className='text-lg'>{info}</p>
            </div>
            <img src={cardImage} alt="" className='col-span-6 rounded-md' />
        </div>);
};

export default SectionCard;