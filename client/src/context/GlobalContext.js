import { createContext, useContext } from "react";


const GlobalContext= createContext();

const initialState= {
    name:"",
    address:"",
    demo:""
}

const GlobalContextProvider=({children})=>{

    return (
        <GlobalContext.Provider value={{...initialState}}>
            {children}
        </GlobalContext.Provider>
    )

}


const useGlobalContext =()=>{
    return useContext(GlobalContext);
}


export {GlobalContextProvider,useGlobalContext};