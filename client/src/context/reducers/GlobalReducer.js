import { SHOW_ALERT,CLEAR_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,LOGIN_USER_BEGIN,LOGIN_USER_SUCCESS,LOGIN_USER_ERROR,LOGOUT_USER,
    INCOME_FETCH_BEGIN,INCOME_FETCH_SUCCESS,INCOME_FETCH_ERROR,
    EXPENSE_FETCH_BEGIN,EXPENSE_FETCH_SUCCESS,EXPENSE_FETCH_ERROR,
    DELETE_INCOME_BEGINS, DELETE_EXPENSE_BEGINS,
    TRANSACTION_FETCH_BEGINS,TRANSACTION_FETCH_SUCCESS,TRANSACTION_FETCH_ERROR, 
    SET_INCOME_EDIT,SET_EXPENSE_EDIT } from "../actions/actions";


const GlobalReducer=(state,action)=>{
    switch (action.type) {
        case SHOW_ALERT:
            const {classes,message}=action.payload;
            return {
                ...state,
                showAlert:true,
                alertClasses:classes,
                alertText:message
            }
        case CLEAR_ALERT:
            return {
                ...state,
                showAlert:false
            }
        
        case REGISTER_USER_BEGIN:
                return {
                    ...state,
                    isLoading:true
                }

        case REGISTER_USER_SUCCESS: 
            return {
                ...state,
                isLoading:false,
                user:action.payload.user,
                token:action.payload.token,
                showAlert:true,
                alertClasses:"bg-green-400 text-white",
                alertText:`${action.payload.message}.Redirecting..`
            }
        case REGISTER_USER_ERROR: 
            return {
                ...state,
                isLoading:false,
                showAlert:true,
                alertClasses:"bg-red-400 text-white",
                alertText:action.payload.message
            }
            
        case LOGIN_USER_BEGIN:
                return {
                    ...state,
                    isLoading:true
                }

        case LOGIN_USER_SUCCESS: 
            return {
                ...state,
                isLoading:false,
                user:action.payload.user,
                token:action.payload.token,
                showAlert:true,
                alertClasses:"bg-green-400 text-white",
                alertText:`${action.payload.message}.Redirecting..`
            }
        case LOGIN_USER_ERROR: 
            return {
                ...state,
                isLoading:false,
                showAlert:true,
                alertClasses:"bg-red-400 text-white",
                alertText:action.payload.message
            }
        case LOGOUT_USER: 
            return {
                ...state,
                user:null,
                token:null,
                showAlert:false
            }
        
        case INCOME_FETCH_BEGIN: 
            return {
                ...state,
                isLoading:true,
                showAlert:false
            }
        case INCOME_FETCH_SUCCESS: 
            return {
                ...state,
                isLoading:false,
                incomes:action.payload.data,
                totalIncomes:action.payload.totalItems,
                numberOfIncomePages: action.payload.numberOfPages

            }
        case INCOME_FETCH_ERROR:
            return {
                ...state,
                isLoading:false,
                showAlert:true,
                alertClasses:"bg-red-400 text-white",
                alertText:action.payload.message
            }

        case EXPENSE_FETCH_BEGIN: 
            return {
                ...state,
                isLoading:true,
                showAlert:false
            }
        case EXPENSE_FETCH_SUCCESS: 
            return {
                ...state,
                isLoading:false,
                expenses:action.payload.data,
                totalExpenses:action.payload.totalItems,
                numberOfExpensePages: action.payload.numberOfPages

            }
        case EXPENSE_FETCH_ERROR:
            return {
                ...state,
                isLoading:false,
                showAlert:true,
                alertClasses:"bg-red-400 text-white",
                alertText:action.payload.message
            }

        case TRANSACTION_FETCH_BEGINS:
            return {
                ...state,
                isLoading:true,
                showAlert:false
            }

        case TRANSACTION_FETCH_SUCCESS: {
            return {
                ...state,
                isLoading:false,
                showAlert:true,
                alertClasses:"bg-green-400 text-white",
                alertText:"New transaction created"

            }
        }
        case TRANSACTION_FETCH_ERROR: {
            return {
                ...state,
                isLoading:false,
                showAlert:true,
                alertClasses:"bg-red-400 text-white",
                alertText:action.payload.message
            }
        }
        
        case SET_INCOME_EDIT:
            const incomeToEdit= state.incomes.filter(item=>item._id===action.payload.id);
            localStorage.setItem("income",JSON.stringify(incomeToEdit));
            return {
                ...state,
                editIncome:incomeToEdit
            }
        case SET_EXPENSE_EDIT:
            const expenseToEdit= state.expenses.filter(item=>item._id===action.payload.id);
            localStorage.setItem("expense",JSON.stringify(expenseToEdit));
            return {
                ...state,
                editExpense:expenseToEdit
            }

        case DELETE_INCOME_BEGINS:
            return {
                ...state,
                isLoading:true,
            }
        
        case DELETE_EXPENSE_BEGINS:
            return {
                ...state,
                isLoading:true
            }

        default:
            return state
    }
}

export default GlobalReducer;