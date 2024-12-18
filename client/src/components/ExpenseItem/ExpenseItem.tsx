import React from 'react'
import styled from 'styled-components'
import { MdDelete } from "react-icons/md";
import { Expense, deleteExpense } from '../../store/expense-slice';
import { iconCategoryMatches } from '../../config';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { getToken } from '../../utils/localStorageManipulation';

const ExpenseItemStyled = styled.div`
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

  .expense-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .expense-info_foot {
    display: flex;
    gap: 10px;
  }

  .delete-icon {
    cursor: pointer;
    font-size: 1.4rem;
  }
`
interface ExpenseItemProps {
  item: Expense
}



export const ExpenseItem: React.FC<ExpenseItemProps> = ({item}) => {
  const dispatch = useDispatch<AppDispatch>()
  const token = getToken()
  let icon;
  Object.keys(iconCategoryMatches).map(cat=>{
    if (cat.toLowerCase() === item.category.toLowerCase()) {
      icon = iconCategoryMatches[cat as keyof typeof iconCategoryMatches];
    }
  })
  
  
  const deleteItem = async (id: string) => {
    if (token) {
      dispatch(deleteExpense(id, token))
    }
  }
  
  return (
    <ExpenseItemStyled>
      {icon ? icon : iconCategoryMatches['other']}
      <div className="expense-info">
        <h3>{item.description}</h3>
        <div className="expense-info_foot">
          <p>${item.amount}</p>
          <p>{new Date(item.date).toLocaleDateString()}</p>
        </div>
      </div>
      <MdDelete onClick={()=>deleteItem(item._id)} className='delete-icon' />
    </ExpenseItemStyled>
  )
}
