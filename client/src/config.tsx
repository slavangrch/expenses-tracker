import { FaCreditCard } from "react-icons/fa6";
import { FaMoneyBillTrendUp, FaHouseChimney } from "react-icons/fa6";
import { MdOutlineDashboard, MdFoodBank, MdCastForEducation, MdOutlinePets } from "react-icons/md";
import { FaPlane, FaHandHoldingWater } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { MdMonetizationOn } from "react-icons/md";
import { SiRemedyentertainment } from "react-icons/si";
import { CiShoppingBasket, CiGift } from "react-icons/ci";
import { CgGym } from "react-icons/cg";

import { IoMdGift } from "react-icons/io";
import { HiBuildingOffice } from "react-icons/hi2";
import { PiOfficeChairFill } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";
import { PiInvoice } from "react-icons/pi";

export const BASE_URL = 'http://localhost:5000';
export const menuItems = [
    {id: '1', title: 'Dashboard', icon: <MdOutlineDashboard />},
    {id:'2',title: 'Expenses', icon: <FaCreditCard/>},
    {id:'3', title: 'Incomes', icon: <FaMoneyBillTrendUp/> },
]

export const iconCategoryMatches = {
    'rent': <FaHouseChimney />,
    'utilities': <FaHandHoldingWater />,
    'groceries': <MdFoodBank />,
    'healthcare': <GiHealthNormal />,
    'entertainment': <SiRemedyentertainment />,
    'shopping': <CiShoppingBasket />,
    'education': <MdCastForEducation />,
    'gym': <CgGym />,
    'travel': <FaPlane />,
    'pets': <MdOutlinePets />,
    'gifts': <CiGift />,
    'other': <MdMonetizationOn />
}

export const iconCategoryIncomesMatches = {
    'salary': <HiBuildingOffice />,
    'bonus': <IoMdGift />,
    'freelance': <PiOfficeChairFill />,
    'investments': <PiInvoice />,
    'gift': <CiGift />,
    'other': <TbPigMoney />
}

