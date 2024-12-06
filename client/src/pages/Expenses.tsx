import React, { useState } from 'react'
import styled from 'styled-components'
import { ExpenseItem } from '../components/ExpenseItem/ExpenseItem';
import { Button } from '../components/Button/Button';
import { NewExpenseForm } from '../components/NewExpenseForm/NewExpenseForm';
import { Modal } from '../components/Modal/Modal';
import {useSelector} from 'react-redux'
import { RootState } from '../store/index';
import { getToken } from '../utils/localStorageManipulation';
import { useNavigate } from 'react-router-dom';


const ExpensesStyled = styled.div`
    background-color: var(--color-dark-gray);
    height: 100%;
    padding: 20px;

    .expenses {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 20px 0;
    }
    
`;
export const Expenses: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const expenses = useSelector((state: RootState) => state.expense)
    console.log(expenses);
    

    function closeModalHandler() {
        setModalIsOpen(false)
    }
  return (
    <ExpensesStyled>
        {modalIsOpen && <Modal><NewExpenseForm closeModal={closeModalHandler}></NewExpenseForm></Modal>}
        <Button onClick={()=>setModalIsOpen(true)}  background='green' title='Add new expense'></Button>
        <div className='expenses'>
            <ExpenseItem></ExpenseItem>
            <ExpenseItem></ExpenseItem>
        </div>
    </ExpensesStyled>
  )
}
