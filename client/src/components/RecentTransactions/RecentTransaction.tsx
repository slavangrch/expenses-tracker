import React from 'react'
import styled from 'styled-components'
import { Transaction } from '../../pages/Dashboard'


const RecentTransactionStyled = styled.div`
    background-color: var(--color-gray);
    padding: 0.7rem;
    border-radius: 5px;
    min-width: 400px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;

    &:nth-child(2n) {
        background-color: var(--color-light-gray);
    }

    .transaction-left {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }

`

interface RecentTransactionProps {
    transaction: Transaction
}

export const RecentTransaction: React.FC<RecentTransactionProps> = ({transaction}) => {
  return (
    <RecentTransactionStyled>
        <div className='transaction-left'>
            <p>{transaction.description}</p>
            <p>{new Date(transaction.date).toLocaleDateString()}</p>
        </div>
        {transaction.type==='expense'? <p>-{transaction.amount}$</p>: <p>+{transaction.amount}$</p>}
        
    </RecentTransactionStyled>
  )
}
