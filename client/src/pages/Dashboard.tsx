import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Chart } from '../components/Chart/Chart';
import { AmountBadge } from '../components/AmountBadge/AmountBadge';
import { AppDispatch, RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../utils/localStorageManipulation';
import { fetchExpensesData } from '../store/expense-slice';
import { fetchIncomeData } from '../store/income-slice';
import { RecentTransaction } from '../components/RecentTransactions/RecentTransaction';

const DashboardStyled = styled.div`
    background-color: var(--color-dark-gray);
    height: 100%;
    padding: 20px;

    .badges {
      display: flex;
      gap: 1.2rem;
      margin-bottom: 3rem;
    }

    .dashboard-footer {
      display: flex;
      color: white;
      justify-content: space-evenly;
    }

    .expenses-chart {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-items: center; */
      gap: 1rem;
    }

    .recent-transactions {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-items: center; */
      gap: 1rem;
    }

`

export interface Transaction {
  _id: string;
  description: string;
  amount: number;
  category: string;
  date: string | Date;
  type: "income" | "expense";
}

export const Dashboard: React.FC = () => {
  const {expenses} = useSelector((state:RootState)=> state.expense)
  const {incomes} = useSelector((state:RootState)=> state.income)
  const expenseTransactions: Transaction[] = expenses.map(exp=>{
    return {...exp, type: 'expense'}
  }) 
  const incomeTransactions: Transaction[] = incomes.map(inc=>{
    return {...inc, type: 'income'}
  }) 
  const allTransactions = expenseTransactions.concat(incomeTransactions)
  const sortedTransactions = allTransactions.sort((a,b)=>new Date(b.date).getTime()-new Date(a.date).getTime())

  const token = getToken()
  const dispatch = useDispatch<AppDispatch>()


  useEffect(() => {
    if (token && (expenses.length===0 || incomes.length===0)) {
        dispatch(fetchExpensesData(token))
        dispatch(fetchIncomeData(token))
    }
}, [dispatch, token])

  const expensesSum = expenses.reduce((sum, exp)=>sum+exp.amount,0)
  const incomesSum = incomes.reduce((sum,inc)=>sum+inc.amount,0)
  const balance = incomesSum-expensesSum;

  return (
    <DashboardStyled>
      <div className="badges">
        <AmountBadge title='Balance:' amount={balance}></AmountBadge>
        <AmountBadge title='Expenses:' amount={expensesSum}></AmountBadge>
      </div>
      
      <div className='dashboard-footer'>
        <div className='expenses-chart'>
        <h4>Expenses Categories</h4>
        <Chart></Chart>
      </div>

      <div className='recent-transactions'>
        <h4>Recent transacions</h4>
        {sortedTransactions.slice(0,5).map(transaction=><RecentTransaction transaction={transaction}></RecentTransaction>)}
      </div>
      </div>
    
    </DashboardStyled>
    
  )
}
