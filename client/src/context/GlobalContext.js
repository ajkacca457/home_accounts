import { createContext, useContext, useReducer } from "react";
import GlobalReducer from "./reducers/GlobalReducer";
import { SHOW_ALERT,CLEAR_ALERT } from "./actions/actions";

const GlobalContext= createContext();

const initialState= {
    isLoading:false,
    showAlert:false,
    alertClasses:"",
    alertText:"",
}

const GlobalContextProvider=({children})=>{

    const [state,dispatch]= useReducer(GlobalReducer,initialState);

    const displayAlert=()=> {
        dispatch({type:SHOW_ALERT})
    }

    const clearAlert=()=> {
        setTimeout(()=>{
            dispatch({type:CLEAR_ALERT})
        },2000)
    }

    return (
        <GlobalContext.Provider value={{...state,displayAlert,clearAlert}}>
            {children}
        </GlobalContext.Provider>
    )

}


const useGlobalContext =()=>{
    return useContext(GlobalContext);
}


export {GlobalContextProvider,useGlobalContext};