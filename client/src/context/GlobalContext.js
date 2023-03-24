import { createContext, useContext, useReducer } from "react";
import GlobalReducer from "./reducers/GlobalReducer";
import { SHOW_ALERT,CLEAR_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR, 
    LOGIN_USER_BEGIN,LOGIN_USER_SUCCESS,LOGIN_USER_ERROR,LOGOUT_USER, 
    INCOME_FETCH_BEGIN, INCOME_FETCH_SUCCESS,
    EXPENSE_FETCH_BEGIN,EXPENSE_FETCH_SUCCESS,EXPENSE_FETCH_ERROR, INCOME_FETCH_ERROR } from "./actions/actions";
import { apiFetch } from "../utilites/axiosConfig";

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
    incomes:[],
    expenses:[],
    totalIncomes:0,
    totalExpenses:0,
    numberOfIncomePages:1,
    numberOfExpensePages:1,
    page:1
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


    const api= apiFetch(state.token);


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

    const getIncomes=async()=>{
        dispatch({type:INCOME_FETCH_BEGIN});
        try {
            const response= await api.get("/incomes");
            const {data,totalItems,numberOfPages}= response.data;
            dispatch({type:INCOME_FETCH_SUCCESS,payload:{data,totalItems,numberOfPages}});
        } catch (error) {
            const {message}= error.response.data;
            dispatch({type:INCOME_FETCH_ERROR,payload:{message}});
        }
        clearAlert();
    }

    const getExpenses= async()=> {
        dispatch({type:EXPENSE_FETCH_BEGIN});
        try {
            const response= await api.get("/expenses");
            const {data,totalItems,numberOfPages}= response.data;
            dispatch({type:EXPENSE_FETCH_SUCCESS,payload:{data,totalItems,numberOfPages}});
        } catch (error) {
            const {message}= error.response.data;
            dispatch({type:EXPENSE_FETCH_ERROR,payload:{message}});
        }
        clearAlert();
    }


    return (
        <GlobalContext.Provider value={{...state,displayAlert,registerUser,loginUser, logOutUser, getIncomes,getExpenses}}>
            {children}
        </GlobalContext.Provider>
    )

}


const useGlobalContext =()=>{
    return useContext(GlobalContext);
}


export {GlobalContextProvider,useGlobalContext};