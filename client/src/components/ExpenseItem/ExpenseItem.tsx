import React from 'react'
import styled from 'styled-components'
import { MdOutlineDashboard, MdDelete } from "react-icons/md";

const ExpenseItemStyled = styled.div`
  /* width: 80%; */
  width: max-content;
  max-width: 400px;
  background-color: var(--color-light-gray);
  padding: 15px 20px;
  border-radius: 5px;
  display: flex;
  gap: 15px;
  align-items: center;

  svg:first-of-type {
    font-size: 2.5rem;
  }

  .expense-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .expense-info_foot {
    display: flex;
    gap: 10px;
  }

`
export const ExpenseItem = () => {
  return (
    <ExpenseItemStyled>
      <MdOutlineDashboard />
      <div className="expense-info">
        <h3>Food</h3>
        <div className="expense-info_foot">
          <p>$ 120</p>
          <p>27/01/2022</p>
          <p>No descripton</p>
        </div>
      </div>
      <MdDelete />
    </ExpenseItemStyled>
  )
}
