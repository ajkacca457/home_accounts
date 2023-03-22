import React, { useEffect } from 'react';
import { useState } from 'react';
import AccountLogo from "../assets/account_logo.svg"
import FormRow from '../components/FormRow';
import Alert from '../components/Alert';
import { useGlobalContext } from '../context/GlobalContext';
import { NavLink, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';


const Auth = () => {

const {showAlert,displayAlert, registerUser,loginUser,user, isLoading}=useGlobalContext(); 

const initailValues= {
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    isRegistered:true,
};

const [values,setValues]= useState(initailValues);

const navigate=useNavigate();


useEffect(()=>{
    if(user) {
        setTimeout(()=>{
            navigate("/dashboard");
        },1500)
    }
},[user,navigate])



const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault();

    const {firstname,lastname,email,password,isRegistered}=values;

    if((!firstname && !isRegistered)||(!lastname && !isRegistered)||!email||!password) {
        displayAlert("bg-red-400 text-white","Please provide all the fields");
        return
    }
    const registerUserDetail= {firstname,lastname,email,password};
    const loginUserDetail= {email,password};

    if(isRegistered) {
        loginUser(loginUserDetail);
        setValues({...initailValues});
    } else {
        registerUser(registerUserDetail);
        setValues({...initailValues,isRegistered:false});
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
                    <NavLink to="/">
                        <img src={AccountLogo} alt="logo" className='w-[300px] h-[60px]'/>
                    </NavLink>
                </div>

                <h1 className='font-heading text-center my-6'>{!values.isRegistered?"Register":"Login"}</h1>

                {showAlert && <Alert/>}

                {!values.isRegistered && <FormRow type="text" name="firstname" value={values.firstname} labelText="Firstname" placeholderText="Enter your first name" handleChange={handleChange}/>}
                {!values.isRegistered && <FormRow type="text" name="lastname" value={values.lastname} labelText="Lastname" placeholderText="Enter your last name" handleChange={handleChange}/>}
                <FormRow type="email" name="email" value={values.email} labelText="Email" placeholderText="Enter email address" handleChange={handleChange}/>
                <FormRow type="password" name="password" value={values.password} labelText="Password" placeholderText="Enter password" handleChange={handleChange}/>
    
                <div className="flex items-center justify-between">
                    <button className="btn-primary disabled:opacity-75 disabled:bg-slate-400" type="submit" disabled={isLoading || user}>
                        {values.isRegistered?"Sign In":"Submit"}
                    </button>
                </div>
                
                <div className='text-right text-cyan-700'>
                    {values.isRegistered?<p>Dont have an account? <button className='btn-underline' onClick={toggleForm}>Register</button> first to use the app.</p>:<p>Already a member? Please <button className='btn-underline' onClick={toggleForm}>Login</button> with your credintials.</p>}
                </div>

            </form>
        </div>
  )
}

export default Auth