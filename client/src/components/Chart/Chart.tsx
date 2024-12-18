import React, { useEffect } from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchExpensesData } from '../../store/expense-slice';
import { getToken } from '../../utils/localStorageManipulation';

interface CharItem {
    id: number,
    value: number,
    label: string
}

export const Chart = () => {
    const {expenses} = useSelector((state: RootState)=>state.expense)
    const chartData: CharItem[] = [];

    expenses.forEach((exp, index)=>{
        const ind = chartData.findIndex(ch=>ch.label===exp.category)
        if (ind!==-1) {
            chartData[ind] = {...chartData[ind], value: chartData[ind].value+exp.amount}
        } else {
            chartData.push({id: index, value: exp.amount, label: exp.category})
        }
    })

    if(expenses.length===0) {
        return <p>Loading...</p>
    }
    
  return (
    <PieChart
      series={[
        {
          data: chartData,
        },
      ]}
      width={400}
      height={200}
    />
  )
}
