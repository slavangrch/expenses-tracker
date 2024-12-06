import {configureStore} from '@reduxjs/toolkit';
import expenseSlice from './expense-slice';
import incomeSlice from './income-slice';

const store = configureStore({
    reducer: {expense: expenseSlice.reducer, income: incomeSlice.reducer}
})

export type RootState = ReturnType<typeof store.dispatch>
export default store;