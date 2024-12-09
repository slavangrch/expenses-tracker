import { FaCreditCard } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineDashboard, MdFoodBank } from "react-icons/md";
import { FaPlane } from "react-icons/fa";
import { GiBowTieRibbon } from "react-icons/gi";
import { MdMonetizationOn } from "react-icons/md";

import { HiBuildingOffice } from "react-icons/hi2";
import { PiOfficeChairFill } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";

export const BASE_URL = 'http://localhost:5000';
export const menuItems = [
    {id: '1', title: 'Dashboard', icon: <MdOutlineDashboard />},
    {id:'2',title: 'Expenses', icon: <FaCreditCard/>},
    {id:'3', title: 'Incomes', icon: <FaMoneyBillTrendUp/> },
]

export const iconCategoryMatches = {
    'food': <MdFoodBank />,
    'trips': <FaPlane />,
    'beauty': <GiBowTieRibbon />,
    'none': <MdMonetizationOn />
}

export const iconCategoryIncomesMatches = {
    'salary': <HiBuildingOffice />,
    'freelance': <PiOfficeChairFill />,
    'none': <TbPigMoney />
}

