import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { FaUserCircle } from "react-icons/fa";
import FormRow from '../components/FormRow';
import {MdArrowBack} from "react-icons/md";
const UserDetail = () => {

    const { user, isLoading, displayAlert,makeUpdateUser } = useGlobalContext();
    const [isEdit, setIsEdit] = useState(false);
    const [updateUser,setUpdateUser]= useState(user);

    const handleChange=(e)=>{
        setUpdateUser({...updateUser,[e.target.name]:e.target.value});
    }

    const userUpdate=(e)=>{
        e.preventDefault();
        const {firstname,lastname,email,location}= updateUser;

        if(firstname===""||lastname===""||email===""||location==="") {
            displayAlert("bg-red-400 text-white","Please provide all the information..")
        }

        makeUpdateUser(updateUser);
        setIsEdit(!isEdit);
    }


    if (isEdit) {
        return (    
        <form className='w-full md:w-10/12 lg:w-9/12 mx-auto bg-white mt-8 rounded p-6' onSubmit={userUpdate}>
            <h1 className='bg-blue-600 text-center my-2 rounded text-white py-2'>Edit profile</h1>
            <FormRow type="text" name="firstname" value={updateUser.firstname} labelText="Firstname" placeholderText="Enter your first name" handleChange={handleChange}/>
            <FormRow type="text" name="lastname" value={updateUser.lastname} labelText="Lastname" placeholderText="Enter your last name" handleChange={handleChange}/>
            <FormRow type="email" name="email" value={updateUser.email} labelText="Email" placeholderText="Enter email address" handleChange={handleChange}/>
            <FormRow type="text" name="location" value={updateUser.location} labelText="Location" placeholderText="Enter your location" handleChange={handleChange}/>
            <button className="btn-primary disabled:opacity-75 disabled:bg-slate-400 my-6" type="submit" disabled={isLoading} >Submit</button>
            <button className='btn-underline flex items-center gap-x-[5px]' onClick={(e)=>{setIsEdit(!isEdit)}}><MdArrowBack/> Back to profile</button>
        </form>  );
    }
    return (
        <div className='py-8'>
            {user &&
                <div className='bg-white p-4 text-center rounded text-2xl'>
                    <FaUserCircle className='text-6xl mx-auto my-4 text-gray-600' />
                    <h1 className='my-2'>{user.firstname}{" "}{user.lastname}</h1>
                    <p className='my-2'>{user.email}</p>
                    <p className='my-2'>{user.location}</p>
                    <button className='bg-gray-600 hover:bg-blue-300 text-white px-3 py-1 rounded my-2' onClick={() => setIsEdit(!isEdit)}>Edit</button>
                </div>}
        </div>
    );
};

export default UserDetail;