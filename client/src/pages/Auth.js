import React from 'react';
import { useState } from 'react';
import AccountLogo from "../assets/account_logo.svg"
import FormRow from '../components/FormRow';
import Alert from '../components/Alert';
import { useGlobalContext } from '../context/GlobalContext';

const Auth = () => {

const {showAlert,displayAlert,clearAlert}=useGlobalContext(); 

const initailValues= {
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    isRegistered:false,
};

const [values,setValues]= useState(initailValues);

const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault();

    const {firstname,lastname,email,password,isRegistered}=values;

    if((!firstname && !isRegistered)||(!lastname && !isRegistered)||!email||!password) {
        displayAlert();
        return
    }
    
}

const toggleForm=(e)=>{
    e.preventDefault();
    setValues({...initailValues,isRegistered:!values.isRegistered})
}

return (
        <div className="w-3/6 mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-6 w-full">
                    <img src={AccountLogo} alt="logo" className='w-[300px] h-[60px]'/>
                </div>

                <h1 className='font-heading text-center my-6'>{!values.isRegistered?"Register":"Login"}</h1>

                {showAlert && <Alert/>}

                {!values.isRegistered && <FormRow type="text" name="firstname" value={values.firstname} labelText="Firstname" placeholderText="Enter your first name" handleChange={handleChange}/>}
                {!values.isRegistered && <FormRow type="text" name="lastname" value={values.lastname} labelText="Lastname" placeholderText="Enter your last name" handleChange={handleChange}/>}
                <FormRow type="email" name="email" value={values.email} labelText="Email" placeholderText="Enter email address" handleChange={handleChange}/>
                <FormRow type="password" name="password" value={values.password} labelText="Password" placeholderText="Enter password" handleChange={handleChange}/>
    
                <div className="flex items-center justify-between">
                    <button className="btn-primary" type="submit">
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