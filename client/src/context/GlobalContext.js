import { createContext, useContext, useReducer } from "react";
import GlobalReducer from "./reducers/GlobalReducer";

const GlobalContext= createContext();

const initialState= {
    isLoading:false,
    showAlert:false,
    alertClasses:"",
    alertText:"",
}

const GlobalContextProvider=({children})=>{

    const [state,dispatch]= useReducer(GlobalReducer,initialState)


    return (
        <GlobalContext.Provider value={{...state}}>
            {children}
        </GlobalContext.Provider>
    )

}


const useGlobalContext =()=>{
    return useContext(GlobalContext);
}


export {GlobalContextProvider,useGlobalContext};