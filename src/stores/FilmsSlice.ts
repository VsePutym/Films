import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getSeriesFilms } from './actions'
import { SeriesFilms } from './types'


interface FilmsSliceState {
	filmsList: SeriesFilms,
}

const initialState: FilmsSliceState = {
	filmsList: []
}

const filmsSlice = createSlice({
	name: 'films',
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getSeriesFilms.fulfilled, (state, action: PayloadAction<SeriesFilms>) => {
				state.filmsList = action.payload
			})
	}
});

export default filmsSlice.reducer