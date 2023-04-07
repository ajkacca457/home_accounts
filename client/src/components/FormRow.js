import React from 'react'

const FormRow = ({type,name,value,labelText,placeholderText,handleChange}) => {
    return (
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                {labelText||name}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            name={name} 
            type={type}
            value={value} 
            placeholder={placeholderText}
            autoFocus="autoFocus" 
            onChange={handleChange}
            />
        </div>
    )
}

export default FormRow