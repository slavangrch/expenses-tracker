import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'


interface AmountBadge {
    title: string,
    amount: number
}

const AmountBadgeStyled = styled.div`
    width: 40%;
    min-width: 350px;
    background-color: var(--color-light-gray);
    border-radius: 9px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p {
        font-size: 1.8rem;
    }

    p span {
        color: var(--color-dark-green);
        font-weight: bolder;
    }
`
export const AmountBadge: React.FC<AmountBadge> = ({title, amount}) => {
  return (
    <AmountBadgeStyled>
       <p>{title} <span>${amount}</span></p>
       {title.startsWith('Expenses') ? <Link to={'/expenses'}><Button background='dark-green' title='Add expense'></Button></Link>: <Link to={'/incomes'}><Button background='dark-green' title='Add income'></Button></Link>}
    </AmountBadgeStyled>
  )
}
