import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
const UserDetail = () => {

    const { user } = useGlobalContext();
    return (
        <div>
            {user &&
                <div>
                    <h1>{user.firstname}</h1>
                    <h1>{user.lastname}</h1>
                    <p>{user.email}</p>
                    <p>{user.location}</p>
                </div>}
        </div>
    );
};

export default UserDetail;