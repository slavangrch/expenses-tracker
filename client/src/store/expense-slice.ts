import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { BASE_URL } from '../config'
import {AppThunk} from './index'


export type Expense =  {
    _id: string,
    description: string,
    amount: number,
    category: string,
    date: string | Date
}

type BackendExpense = Record<string, unknown> & {
    _id: string,
    description: string,
    amount: number,
    category: string,
    date: string | Date
}

const expenseSlice = createSlice({
    name: 'expense',
    initialState: {expenses: [] as Expense[]},
    reducers: {
        addExpense(state, action: PayloadAction<Expense>) {
            state.expenses.push(action.payload)
        },
        deleteExpense(state, action: PayloadAction<string>) {
            state.expenses.filter(exp=>exp._id !== action.payload)
        }, 
        replaceExpenses(state, action: PayloadAction<Expense[]>) {
            state.expenses = action.payload;
        }
    }
})

export const fetchExpensesData = (token: string): AppThunk => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(`${BASE_URL}/expenses/getExpenses`, {
                method: 'GET',
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const result = await response.json()
                console.log(result);
                throw new Error('Fetching error')
            }

            const result = await response.json()
            // console.log(result);
            return result;
        }

        try {
            const data = await fetchData();
            const expensesArray: Expense[] = data.map((exp: BackendExpense) => {
                return {_id: exp._id as string, description: exp.description as string, amount: exp.amount as number, category: exp.category as string, date: exp.date as string | Date}
            })
            dispatch(expenseActions.replaceExpenses(expensesArray))
        } catch (error) {
            console.log(error);
            
        }
    }
}

export const expenseActions =  expenseSlice.actions;


export default expenseSlice;