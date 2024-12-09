import {configureStore, ThunkAction} from '@reduxjs/toolkit';
import {AnyAction} from 'redux'
import expenseSlice from './expense-slice';
import incomeSlice from './income-slice';

const store = configureStore({
    reducer: {expense: expenseSlice.reducer, income: incomeSlice.reducer}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export default store;