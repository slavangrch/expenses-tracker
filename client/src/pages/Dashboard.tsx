import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Menu } from '../components/Menu/Menu';
import { MainLayout } from '../styles';
import { Chart } from '../components/Chart/Chart';
import { AmountBadge } from '../components/AmountBadge/AmountBadge';
import { AppDispatch, RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../utils/localStorageManipulation';
import { fetchExpensesData } from '../store/expense-slice';
import { fetchIncomeData } from '../store/income-slice';

const DashboardStyled = styled.div`
    background-color: var(--color-dark-gray);
    height: 100%;
    padding: 20px;

    .expenses-chart {
      color: white;
      text-align: center;
    }

    .badges {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      margin-bottom: 1.2rem;
    }



`
export const Dashboard: React.FC = () => {
  const {expenses} = useSelector((state:RootState)=> state.expense)
  const {incomes} = useSelector((state:RootState)=> state.income)
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
      
      <div className='expenses-chart'>
        <h4>Expenses Categories</h4>
        <Chart></Chart>
      </div>
      
    </DashboardStyled>
    
  )
}
