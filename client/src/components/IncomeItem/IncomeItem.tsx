import React from 'react'
import styled from 'styled-components'
import {  MdDelete } from "react-icons/md";
import { Income, deleteIncome } from '../../store/income-slice';
import { iconCategoryIncomesMatches } from '../../config';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { getToken } from '../../utils/localStorageManipulation';

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
    align-items: center;
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

interface IncomeItemProps {
  item: Income
}

export const IncomeItem: React.FC<IncomeItemProps> = ({item}) => {
  const dispatch = useDispatch<AppDispatch>()
  const token = getToken()
  let icon;
  const isFoundKey = Object.keys(iconCategoryIncomesMatches).find(cat => cat.toLowerCase() === item.category.toLowerCase())
  if (isFoundKey) {
    icon = iconCategoryIncomesMatches[isFoundKey as keyof typeof iconCategoryIncomesMatches]
  }

  const deleteItem = async (id: string) => {
    if (token) {
      dispatch(deleteIncome(id, token))
    }
  }
  
  return (
    <IncomeItemStyled>
      {icon ? icon : iconCategoryIncomesMatches['other']}
      <div className="income-info">
        <h3>{item.description}</h3>
        <div className="income-info_foot">
          <p>${item.amount}</p>
          <p>{new Date(item.date).toLocaleDateString()}</p>
        </div>
      </div>
      <MdDelete onClick={()=>deleteItem(item._id)} className='delete-icon' />
    </IncomeItemStyled>
  )
}
