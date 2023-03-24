import { SHOW_ALERT,CLEAR_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,LOGIN_USER_BEGIN,LOGIN_USER_SUCCESS,LOGIN_USER_ERROR,LOGOUT_USER,
    INCOME_FETCH_BEGIN,INCOME_FETCH_SUCCESS,INCOME_FETCH_ERROR } from "../actions/actions";


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
            
        default:
            return state
    }
}

export default GlobalReducer;