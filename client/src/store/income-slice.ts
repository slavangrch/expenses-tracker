import {createSlice, PayloadAction} from '@reduxjs/toolkit'


type Income =  {
    _id: string,
    description: string,
    amount: number,
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
            state.incomes.filter(inc=>inc._id !== action.payload)
        }
    }
})

export const incomeActions =  incomeSlice.actions;

export default incomeSlice;