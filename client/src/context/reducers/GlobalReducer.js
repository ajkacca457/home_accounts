import { SHOW_ALERT,CLEAR_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR } from "../actions/actions";


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
            const {user,token}=action.payload;    
            return {
                ...state,
                isLoading:false,
                user:user,
                token:token,
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
        default:
            return state
    }
}

export default GlobalReducer;