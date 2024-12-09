import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button/Button';
import { Modal } from '../components/Modal/Modal';
import { NewIncomeForm } from '../components/NewIncomeForm/NewIncomeForm';
import { IncomeItem } from '../components/IncomeItem/IncomeItem';
import {useDispatch, useSelector} from 'react-redux'
import { AppDispatch, RootState } from '../store/index';
import { fetchIncomeData } from '../store/income-slice';
import { getToken } from '../utils/localStorageManipulation';


const IncomesStyled = styled.div`
    background-color: var(--color-dark-gray);
    height: 100%;
    padding: 20px;

    .incomes {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 20px 0;
    }
    
`;
export const Incomes: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const {incomes} = useSelector((state: RootState) => state.income)
    const token = getToken()
    const dispatch = useDispatch<AppDispatch>()
    console.log(incomes);
    

    useEffect(() => {
        if (token) {
            dispatch(fetchIncomeData(token))
        }  
    }, [dispatch, token])

    function closeModalHandler() {
        setModalIsOpen(false)
    }
  return (
    <IncomesStyled>
        {modalIsOpen && <Modal><NewIncomeForm closeModal={closeModalHandler}></NewIncomeForm></Modal>}
        <Button onClick={()=>setModalIsOpen(true)}  background='green' title='Add new income'></Button>
        <div className='incomes'>
            {incomes && incomes.length>0 && incomes.map(inc=><IncomeItem key={inc._id} item={inc}></IncomeItem>)}
        </div>
    </IncomesStyled>
  )
}
