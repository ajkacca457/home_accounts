import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
 const { user }= useGlobalContext();
 if(!user) {
   return <Navigate to="/auth" replace />;
 }
  return children
}

export default ProtectedRoute;