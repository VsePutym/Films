import { createAsyncThunk } from '@reduxjs/toolkit'
import { SeriesFilms } from './types'

export const getSeriesFilms = createAsyncThunk<SeriesFilms, string>(
	'films/getSeriesFilms',
	async (title) => {
		const response = await fetch(`http://www.omdbapi.com/?apikey=a3dd2295&s=${title}`);
		const data = await response.json();
		return data.Search
	}
);

