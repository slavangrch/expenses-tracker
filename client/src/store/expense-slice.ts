import {createSlice, PayloadAction} from '@reduxjs/toolkit'


type Expense =  {
    _id: string,
    description: string,
    amount: number,
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
        }
    }
})

export const expenseActions =  expenseSlice.actions;

export default expenseSlice;