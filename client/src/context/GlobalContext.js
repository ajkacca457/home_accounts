import { createContext, useContext, useReducer } from "react";
import GlobalReducer from "./reducers/GlobalReducer";
import { SHOW_ALERT,CLEAR_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR, 
    LOGIN_USER_BEGIN,LOGIN_USER_SUCCESS,LOGIN_USER_ERROR,LOGOUT_USER, 
    INCOME_FETCH_BEGIN, INCOME_FETCH_SUCCESS,
    EXPENSE_FETCH_BEGIN,EXPENSE_FETCH_SUCCESS,EXPENSE_FETCH_ERROR, INCOME_FETCH_ERROR, 
    DELETE_INCOME_BEGINS,DELETE_EXPENSE_BEGINS,
    TRANSACTION_ADD_BEGINS,TRANSACTION_ADD_SUCCESS,TRANSACTION_ADD_ERROR,
    SET_INCOME_EDIT, SET_EXPENSE_EDIT,
    EDIT_TRANSACTION_BEGINS,EDIT_TRANSACTION_SUCCESS,EDIT_TRANSACTION_ERROR,
    STATS_FETCH_BEGINS,STATS_FETCH_SUCCESS,STATS_FETCH_ERROR,SET_TRANSACTION_FILTER,
    CHANGE_PAGE} from "./actions/actions";
import { apiFetch } from "../utilites/axiosConfig";

const GlobalContext= createContext();


const user= localStorage.getItem("user");
const token=localStorage.getItem("token");
const income=localStorage.getItem("income");
const expense= localStorage.getItem("expense");

const initialState= {
    isLoading:false,
    user:user?JSON.parse(user):null,
    token:token?token:null,
    userLocation:"",
    showAlert:false,
    alertClasses:"",
    alertText:"",
    filterTitle:"",
    filterStatus:"all",
    filterCategory:"all",
    incomes:[],
    expenses:[],
    expenseStats:"",
    incomeStats:"",
    editIncome:income?JSON.parse(income):"",
    editExpense:expense?JSON.parse(expense):"",
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
        localStorage.removeItem("income");
        localStorage.removeItem("expense");
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
        const {filterStatus,filterCategory,filterTitle}= state;

        let url= `/incomes?status=${filterStatus}&category=${filterCategory}`

        if(filterTitle) {
            url=`${url}&title=${filterTitle}`;
        }

        dispatch({type:INCOME_FETCH_BEGIN});
        try {
            const response= await api.get(url);
            const {data,totalItems,numberOfPages}= response.data;
            dispatch({type:INCOME_FETCH_SUCCESS,payload:{data,totalItems,numberOfPages}});
        } catch (error) {
            const {message}= error.response.data;
            dispatch({type:INCOME_FETCH_ERROR,payload:{message}});
        }
        clearAlert();
    }

    const getExpenses= async()=> {
        const {filterStatus,filterCategory,filterTitle,page}= state;

        let url= `/expenses?page=${page}&status=${filterStatus}&category=${filterCategory}`

        if(filterTitle) {
            url=`${url}&title=${filterTitle}`;
        }
        dispatch({type:EXPENSE_FETCH_BEGIN});
        try {
            const response= await api.get(url);
            const {data,totalItems,numberOfPages}= response.data;
            dispatch({type:EXPENSE_FETCH_SUCCESS,payload:{data,totalItems,numberOfPages}});
        } catch (error) {
            const {message}= error.response.data;
            dispatch({type:EXPENSE_FETCH_ERROR,payload:{message}});
        }
        clearAlert();
    }

    const addTransaction=async(url,item)=>{
        dispatch({type:TRANSACTION_ADD_BEGINS});
        try {
            await api.post(url,item);
            dispatch({type:TRANSACTION_ADD_SUCCESS});

        } catch (error) {
            const {message}= error.response.data;
            dispatch({type:TRANSACTION_ADD_ERROR,payload:{message}})
        }

        clearAlert();
        
    }   

    const setIncomeEdit=(id)=> {
        dispatch({type:SET_INCOME_EDIT,payload:{id}})
    };
    const setExpenseEdit=(id)=> {
        dispatch({type:SET_EXPENSE_EDIT,payload:{id}})
    };    

    const editTransaction= async(url,item)=> {
        dispatch({type:EDIT_TRANSACTION_BEGINS});
        try {
            await api.patch(url,item);
            dispatch({type:EDIT_TRANSACTION_SUCCESS})
        } catch (error) {
            const {message}= error.response.data;
            dispatch({type:EDIT_TRANSACTION_ERROR,payload:{message}})
        }
        clearAlert();
    }

    const deleteIncome=async(id)=>{
        dispatch({type:DELETE_INCOME_BEGINS});
        try {
            await api.delete(`/incomes/${id}`);
            getIncomes();
        } catch (error) {
            console.log(error);
        }
    }
    
    const deleteExpense=async(id)=>{
        dispatch({type:DELETE_EXPENSE_BEGINS});
        try {
            await api.delete(`/expenses/${id}`);
            getExpenses();
        } catch (error) {
            console.log(error);
        }
    }

    const getStats=async()=>{
        dispatch({type:STATS_FETCH_BEGINS});
        try {
            const response= await Promise.all([api.get("/incomes/income-stats"),api.get("/expenses/expense-stats")]);
            const statsIncome=response[0].data;
            const statsExpense= response[1].data;
            dispatch({type:STATS_FETCH_SUCCESS,payload:{statsIncome,statsExpense}}) 
        } catch (error) {
            const {message}= error.response.data;
            dispatch({type:STATS_FETCH_ERROR,payload:{message}});
        }
        clearAlert();
    }

    const setFilter=(name,value)=>{
        dispatch({type:SET_TRANSACTION_FILTER,payload:{name,value}})
    }

    const pageChange=(pageNum)=>{
        dispatch({type:CHANGE_PAGE,payload:pageNum});
    }


    return (
        <GlobalContext.Provider value={{...state,displayAlert,registerUser,
        loginUser, logOutUser, getIncomes,getExpenses, deleteIncome,deleteExpense,
        addTransaction, setIncomeEdit, setExpenseEdit, editTransaction,getStats,setFilter,pageChange}}>
            {children}
        </GlobalContext.Provider>
    )

}


const useGlobalContext =()=>{
    return useContext(GlobalContext);
}


export {GlobalContextProvider,useGlobalContext};