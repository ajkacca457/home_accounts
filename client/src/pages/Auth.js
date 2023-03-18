import React from 'react';
import { useState } from 'react';
import AccountLogo from "../assets/account_logo.svg"
import FormRow from '../components/FormRow';

const Auth = () => {

const initailValues= {
    firstname:"",
    lastname:"",
    email:"",
    password:""
};

const [values,setValues]= useState(initailValues);

console.log(values);

const handleChange=(e)=>{
    console.log(e.target.value);
}

  return (
        <div class="w-3/6 mx-auto">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-6 w-full">
                    <img src={AccountLogo} alt="logo" className='w-[300px] h-[60px]'/>
                </div>

                <h1 className='font-heading text-center my-6'>Register</h1>

                <FormRow type="text" name="firstname" value={values.firstname} labelText="Firstname" placeholderText="Enter your firstname" handleChange={handleChange}/>

                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
    
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                </div>
    
                <div class="flex items-center justify-between">
                    <button class="btn-primary" type="button">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
  )
}

export default Auth