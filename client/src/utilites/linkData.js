import {FcStatistics, FcMoneyTransfer} from "react-icons/fc"
import {TiShoppingCart} from "react-icons/ti"

export const links= [
    {
        id:1,
        path:"/dashboard",
        text:"Statistics",
        icon:<FcStatistics/>
    },
    {
        id:2,
        path:"/dashboard/incomes",
        text:"All Incomes",
        icon:<FcMoneyTransfer/>
    },
    {
        id:3,
        path:"/dashboard/expenses",
        text:"All Expenses",
        icon:<TiShoppingCart/>
    },

]