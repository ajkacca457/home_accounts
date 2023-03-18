import React from 'react';
import { useState } from 'react';
import AccountLogo from "../assets/account_logo.svg"
import FormRow from '../components/FormRow';

const Auth = () => {

const initailValues= {
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    isRegistered:false
};

const [values,setValues]= useState(initailValues);

const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
}


const toggleForm=(e)=>{
    e.preventDefault();
    setValues({...values,isRegistered:!values.isRegistered})
}

  return (
        <div class="w-3/6 mx-auto">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-6 w-full">
                    <img src={AccountLogo} alt="logo" className='w-[300px] h-[60px]'/>
                </div>

                <h1 className='font-heading text-center my-6'>{!values.isRegistered?"Register":"Login"}</h1>
                {!values.isRegistered && <FormRow type="text" name="firstname" value={values.firstname} labelText="Firstname" placeholderText="Enter your first name" handleChange={handleChange}/>}
                {!values.isRegistered && <FormRow type="text" name="lastname" value={values.lastname} labelText="Lastname" placeholderText="Enter your last name" handleChange={handleChange}/>}
                <FormRow type="email" name="email" value={values.email} labelText="Email" placeholderText="Enter email address" handleChange={handleChange}/>
                <FormRow type="password" name="password" value={values.password} labelText="Password" placeholderText="Enter password" handleChange={handleChange}/>
    
                <div class="flex items-center justify-between">
                    <button class="btn-primary" type="button">
                        {!values.isRegistered?"Submit":"Sign In"}
                    </button>
                </div>
                
                <div className='text-right text-cyan-700'>
                    {!values.isRegistered?<p>Already a member? Please <button className='btn-underline' onClick={toggleForm}>Login</button> with your credintials.</p>:<p>Dont have an account? <button className='btn-underline' onClick={toggleForm}>Register</button> first to use the app.</p>}
                </div>

            </form>
        </div>
  )
}

export default Auth