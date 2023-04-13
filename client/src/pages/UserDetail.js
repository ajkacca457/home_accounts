import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { FaUserCircle } from "react-icons/fa";
const UserDetail = () => {

    const { user } = useGlobalContext();
    const [isEdit, setIsEdit] = React.useState(false);

    if (isEdit) {
        return (<h1>Edit profile</h1>);
    }
    return (
        <div className='py-8'>
            {user &&
                <div className='bg-white p-4 text-center rounded text-2xl'>
                    <FaUserCircle className='text-6xl mx-auto my-4 text-blue-600' />
                    <h1 className='my-2'>{user.firstname}{" "}{user.lastname}</h1>
                    <p className='my-2'>{user.email}</p>
                    <p className='my-2'>{user.location}</p>
                    <button className='bg-blue-600 text-white px-3 py-1 rounded my-2' onClick={() => setIsEdit(true)}>Edit</button>
                </div>}
        </div>
    );
};

export default UserDetail;