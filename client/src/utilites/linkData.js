import { FcStatistics, FcMoneyTransfer } from "react-icons/fc";
import { TiShoppingCart } from "react-icons/ti";
import { BsPlusSquare } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

export const links = [
    {
        id: 1,
        path: "/dashboard",
        text: "Statistics",
        icon: <FcStatistics />
    },
    {
        id: 2,
        path: "/dashboard/incomes",
        text: "All Incomes",
        icon: <FcMoneyTransfer />
    },
    {
        id: 3,
        path: "/dashboard/expenses",
        text: "All Expenses",
        icon: <TiShoppingCart />
    },
    {
        id: 4,
        path: "/dashboard/add-transaction",
        text: "Add Transaction",
        icon: <BsPlusSquare />
    },
    {
        id: 5,
        path: "/dashboard/user",
        text: "Profile",
        icon: <FaUserCircle />
    },
];

export const incomeCategories = ["Salary", "Profit", "Investment", "Interest", "Other"];
export const expenseCategories = ["Groceries", "Rent", "Insurance", "Entertainment", "Education", "Health", "Miscellaneous"];