import { createContext, useContext, useReducer } from "react";
import { api } from "../utilites/axiosConfig";
import GlobalReducer from "./reducers/GlobalReducer";
import { SHOW_ALERT,CLEAR_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR } from "./actions/actions";

const GlobalContext= createContext();

const initialState= {
    isLoading:false,
    user:null,
    token:null,
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


    const registerUser=async(currentUser)=> {
        dispatch({type:REGISTER_USER_BEGIN});
        try {
            const response= await api.post("/auth/register",currentUser);
            const {user,token,message}=response.data;
            displayAlert("bg-green-400 text-white",message);
            dispatch({type:REGISTER_USER_SUCCESS,payload:{user,token}})
        } catch (error) {
            const {message}= error.response.data;
            displayAlert("bg-red-400",message);
            dispatch({type:REGISTER_USER_ERROR});
        }
    }


    return (
        <GlobalContext.Provider value={{...state,displayAlert,registerUser}}>
            {children}
        </GlobalContext.Provider>
    )

}


const useGlobalContext =()=>{
    return useContext(GlobalContext);
}


export {GlobalContextProvider,useGlobalContext};