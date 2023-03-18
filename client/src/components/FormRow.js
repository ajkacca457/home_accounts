import React from 'react'

const FormRow = ({type,name,value,labelText,placeholderText,handleChange}) => {
    return (
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                {labelText||name}
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            name={name} 
            type={type}
            value={value} 
            placeholder={placeholderText} 
            onChange={handleChange}
            />
        </div>
    )
}

export default FormRow