import { SHOW_ALERT,CLEAR_ALERT } from "../actions/actions";


const GlobalReducer=(state,action)=>{

    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                showAlert:true,
                alertClasses:"bg-red-500 text-white",
                alertText:"Please provide all the fields"
            }
        case CLEAR_ALERT:
            return {
                ...state,
                showAlert:false
            }

        default:
            return state
    }
}

export default GlobalReducer;