import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { BASE_URL } from '../config'
import { AppThunk } from './index'

export type Income =  {
    _id: string,
    description: string,
    amount: number,
    category: string,
    date: string | Date
}

type BackendIncome = Record<string, unknown> & {
    _id: string,
    description: string,
    amount: number,
    category: string,
    date: string | Date
}

const incomeSlice = createSlice({
    name: 'income',
    initialState: {incomes: [] as Income[]},
    reducers: {
        addIncome(state, action: PayloadAction<Income>) {
            state.incomes.push(action.payload)
        },
        deleteIncome(state, action: PayloadAction<string>) {
            state.incomes = state.incomes.filter(inc=>inc._id !== action.payload)
        },
        replaceIncomes(state, action: PayloadAction<Income[]>) {
            state.incomes = action.payload;
        }

    }
})

export function fetchIncomeData(token: string): AppThunk {
     return async (dispatch) => {
        async function fetchIncomeData() {
            const response = await fetch(`${BASE_URL}/incomes/getIncomes`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            if (!response.ok) {
                const result = await response.json();
                console.log(result);
                throw new Error('Fetching error')
            }

            const result = response.json();
            return result;
        }

        try {
            const data = await fetchIncomeData();
            const incomeData: Income[] = data.map((inc: BackendIncome)=>{
                return {_id: inc._id as string, description: inc.description as string, amount: inc.amount as number, category: inc.category as string, date: inc.date as string | Date}
            })
            dispatch(incomeActions.replaceIncomes(incomeData))
        } catch (error) {
            console.log(error);
        }
        
     }
}

export const deleteIncome = (id: string, token: string): AppThunk => {
    return async (dispatch) => {
        const deleteItem = async () => {
            const response = await fetch(`http://localhost:5000/incomes/deleteIncome/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                const result = await response.json();
                console.log(result);
            }
            return response;
        }

        try {
            const result = await deleteItem();
            dispatch(incomeActions.deleteIncome(id))
        } catch (error) {
            console.log(error);
            
        }
    }
}

export const incomeActions =  incomeSlice.actions;

export default incomeSlice;