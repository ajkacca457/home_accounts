import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import { Navigate } from 'react-router-dom';



const ProtectedRoute = ({children}) => {
 const { user,token,logOutUser }= useGlobalContext();
 if(!user) {
   return <Navigate to="/auth" replace />;
 }


 //tentative solution
 
if(token) {
  const {exp}=JSON.parse(atob(token.split(".")[1]));
  if(exp*1000<Date.now()){
    logOutUser();
  }
}

  return children
}

export default ProtectedRoute;