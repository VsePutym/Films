import { combineReducers, configureStore } from '@reduxjs/toolkit'
import filmsSlice from './FilmsSlice'

const rootReducer = combineReducers({
	filmsSeries: filmsSlice
});

export const store = configureStore({
	reducer: rootReducer
});



export type RootState = ReturnType<typeof store .getState>;
export type AppDispatch = typeof store .dispatch;