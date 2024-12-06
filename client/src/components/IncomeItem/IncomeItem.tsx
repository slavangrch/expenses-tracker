import React from 'react'
import styled from 'styled-components'
import { MdOutlineDashboard, MdDelete } from "react-icons/md";

const IncomeItemStyled = styled.div`
  /* width: 80%; */
  /* width: max-content; */
  /* max-width: 400px; */
  width: 100%;
  background-color: var(--color-light-gray);
  padding: 15px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;

  svg:first-of-type {
    font-size: 2.5rem;
  }

  .income-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .income-info_foot {
    display: flex;
    gap: 10px;
  }

  .delete-icon {
    cursor: pointer;
    font-size: 1.4rem;
  }

`
export const IncomeItem = () => {
  return (
    <IncomeItemStyled>
      <MdOutlineDashboard />
      <div className="income-info">
        <h3>Job</h3>
        <div className="income-info_foot">
          <p>$ 120</p>
          <p>27/01/2022</p>
          <p>Developers</p>
        </div>
      </div>
      <MdDelete className='delete-icon' />
    </IncomeItemStyled>
  )
}
