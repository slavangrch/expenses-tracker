import { FaCreditCard, FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";

export const BASE_URL = 'http://localhost:5000';
export const menuItems = [
    {id: '1', title: 'Dashboard', icon: <MdOutlineDashboard />},
    {id:'2',title: 'Expenses', icon: <FaCreditCard/>},
    {id:'3', title: 'Incomes', icon: <FaMoneyCheckDollar/> },

]