import React from 'react'
import { useAppSelector } from '../hooks/hooks'
import { selectorFilms } from '../stores/selectors'
import { SeriesFilm, SeriesFilms } from '../stores/types'

const ListFilms:React.FC = () => {
	const list: SeriesFilms = useAppSelector(selectorFilms);
	
	if (list.length === 0 ){
		return <h1>Фильмы не найдены</h1>
	}
	
	console.log(list)
	return (
		<div>
			<h1>Список фильмов</h1>
			{list.map((item: SeriesFilm) => (
				<li key={item.imdbID}>
					<p>{item.Title}</p>
					<p>{item.Year}</p>
					<img alt={item.Title} src={item.Poster}/>
				</li>
			))}
		</div>
	)
}

export default ListFilms