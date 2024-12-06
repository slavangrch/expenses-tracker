import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from '../../config'
import { getToken } from '../../utils/localStorageManipulation'
import { Button } from '../Button/Button'
const NewIncomeFormStyled = styled.div`

    form {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .input-control {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 0.5rem;
        align-items: center;
    }

    input {
        width: 80%;
        padding: 0.6rem;
        border: none;
        border-radius: 5px;
        outline: none;
        font-family: var(--font-family);
    }

    select {
        width: 80%;
        padding: 0.6rem;
        border: none;
        border-radius: 5px;
        outline: none;
    }

    .actions {
        display: flex;
        gap: 1rem;
        justify-content: end;
    }
`

interface NewIncomeFormProps {
    closeModal: ()=>void
}
export const NewIncomeForm: React.FC<NewIncomeFormProps> = ({closeModal}) => {
    const token = getToken()

    async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(token);
        
        const formData = new FormData(e.target as HTMLFormElement);
        const formObj = Object.fromEntries(formData.entries());

        console.log(formObj);

        const response = await fetch(`${BASE_URL}/incomes/addIncome`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formObj)
        });

        if (!response.ok) {
            const result = await response.json()
            console.log(result);
        }

        const result = await response.json()
        closeModal()
    }
  return (
    <NewIncomeFormStyled>
        <form onSubmit={submitHandler} action="">
        {/* {error&&<p>{error}</p>} */}
            <div className="input-control">
                <label htmlFor="category">Source of income</label>
                <select name="category" id="" >
                    <option value="select category">Select category</option>
                    <option value="food">Freelance</option>
                    <option value="car">Developer job</option>
                </select>
            </div>
            {/* {<div className="input-control">
                <label htmlFor="category">Own category</label>
                <input type="text" name='category'/>
            </div>} */}
            <div className="input-control">
                <label htmlFor="description">Description</label>
                <input type="text" name='description'/>
            </div>
            <div className="input-control">
                <label htmlFor="amount">Amount</label>
                <input type="text" name='amount'/>
            </div> 
            <div className="input-control">
                <label htmlFor="date">Date</label>
                <input type="date" name='date' />
            </div>
            <div className="actions">
                <Button onClick={closeModal} background='green' title='Cancel' ></Button>
                <Button background='green' title='Add'></Button>
            </div>
        </form>
    </NewIncomeFormStyled>
  )
}
