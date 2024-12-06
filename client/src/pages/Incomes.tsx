import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button/Button';
import { Modal } from '../components/Modal/Modal';
import { NewIncomeForm } from '../components/NewIncomeForm/NewIncomeForm';
import { IncomeItem } from '../components/IncomeItem/IncomeItem';


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

    function closeModalHandler() {
        setModalIsOpen(false)
    }
  return (
    <IncomesStyled>
        {modalIsOpen && <Modal><NewIncomeForm closeModal={closeModalHandler}></NewIncomeForm></Modal>}
        <Button onClick={()=>setModalIsOpen(true)}  background='green' title='Add new income'></Button>
        <div className='incomes'>
            <IncomeItem></IncomeItem>
            <IncomeItem></IncomeItem>
        </div>
    </IncomesStyled>
  )
}
