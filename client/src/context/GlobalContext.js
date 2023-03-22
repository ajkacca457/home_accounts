import { createContext, useContext, useReducer } from "react";
import { api } from "../utilites/axiosConfig";
import GlobalReducer from "./reducers/GlobalReducer";
import { SHOW_ALERT,CLEAR_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR, LOGIN_USER_BEGIN,LOGIN_USER_SUCCESS,LOGIN_USER_ERROR,LOGOUT_USER } from "./actions/actions";

const GlobalContext= createContext();


const user= localStorage.getItem("user");
const token=localStorage.getItem("token");


const initialState= {
    isLoading:false,
    user:user?JSON.parse(user):null,
    token:token?token:null,
    userLocation:"",
    showAlert:false,
    alertClasses:"",
    alertText:"",
}

const GlobalContextProvider=({children})=>{

    const [state,dispatch]= useReducer(GlobalReducer,initialState);

    const displayAlert=(classes,message)=> {
        dispatch({type:SHOW_ALERT,payload:{classes,message}});
        clearAlert();
    }

    const clearAlert=()=> {
        setTimeout(()=>{
            dispatch({type:CLEAR_ALERT})
        },2000)
    }

    const addToLocalStorage=(myuser,usertoken)=>{
        localStorage.setItem("user",JSON.stringify(myuser));
        localStorage.setItem("token",usertoken);
    }

    const clearLocalStorage=()=> {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    const registerUser=async(currentUser)=> {
        dispatch({type:REGISTER_USER_BEGIN});
        try {
            const response= await api.post("/auth/register",currentUser);
            const {user,token,message}=response.data;
            dispatch({type:REGISTER_USER_SUCCESS,payload:{user,token,message}});
            addToLocalStorage(user,token);
        } catch (error) {
            const {message}= error.response.data;
            dispatch({type:REGISTER_USER_ERROR,payload:{message}});
            clearAlert();
        }
    }

    const loginUser=async(currentUser)=> {
        dispatch({type:LOGIN_USER_BEGIN});
        try {
            const response= await api.post("/auth/login",currentUser);
            const {user,token,message}=response.data;
            dispatch({type:LOGIN_USER_SUCCESS,payload:{user,token,message}});
            addToLocalStorage(user,token);
        } catch (error) {
            const {message}= error.response.data;
            dispatch({type:LOGIN_USER_ERROR,payload:{message}});
            clearAlert();
        }
    }

    const logOutUser= ()=>{
        dispatch({type:LOGOUT_USER});
        clearLocalStorage();
    }


    return (
        <GlobalContext.Provider value={{...state,displayAlert,registerUser,loginUser, logOutUser}}>
            {children}
        </GlobalContext.Provider>
    )

}


const useGlobalContext =()=>{
    return useContext(GlobalContext);
}


export {GlobalContextProvider,useGlobalContext};