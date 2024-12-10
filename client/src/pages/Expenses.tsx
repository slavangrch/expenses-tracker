import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ExpenseItem } from '../components/ExpenseItem/ExpenseItem';
import { Button } from '../components/Button/Button';
import { NewExpenseForm } from '../components/NewExpenseForm/NewExpenseForm';
import { Modal } from '../components/Modal/Modal';
import {useSelector} from 'react-redux'
import { RootState } from '../store/index';
import { AppDispatch } from "../store/index";
import {useDispatch} from 'react-redux'
import { fetchExpensesData } from "../store/expense-slice";
import { getToken } from '../utils/localStorageManipulation';

const ExpensesStyled = styled.div`
    background-color: var(--color-dark-gray);
    height: 100%;
    padding: 20px;
    overflow-y: scroll;
    scrollbar-width: none;
    overflow-y: scroll;
    scrollbar-width: none;

    .expenses {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 20px 0;
    }
    
`;
export const Expenses: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const {expenses} = useSelector((state: RootState) => state.expense)
    const dispatch = useDispatch<AppDispatch>();
    const token = getToken()
    // console.log(expenses);
    

    useEffect( () => {
        if (token) {
            dispatch(fetchExpensesData(token))
        }
    }, [dispatch, token])

    function closeModalHandler() {
        setModalIsOpen(false)
    }
  return (
    <ExpensesStyled>
        {modalIsOpen && <Modal><NewExpenseForm closeModal={closeModalHandler}></NewExpenseForm></Modal>}
        <Button onClick={()=>setModalIsOpen(true)}  background='green' title='Add new expense'></Button>
        <div className='expenses'>
            {expenses && expenses.length>0 && expenses.map(exp=> <ExpenseItem key={exp._id} item={exp}></ExpenseItem>)}
        </div>
    </ExpensesStyled>
  )
}
