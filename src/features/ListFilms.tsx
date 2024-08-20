import React from 'react'
import { useAppSelector } from '../hooks/hooks'
import { selectorFilms } from '../stores/selectors'
import { SeriesFilm, SeriesFilms } from '../stores/types';
import styles from '../styles/styles.module.scss'

const ListFilms:React.FC = () => {
	const list: SeriesFilms = useAppSelector(selectorFilms);
	
	if (list.length === 0 ){
		return <h1>Введите название поиска выше</h1>
	}
	
	return (
		<div>
			<h1 className={styles.filmsTitle}>Список фильмов</h1>
		<div className={styles.wrapperList}>
			{list.map((item: SeriesFilm) => (
				<li className={styles.Film} key={item.imdbID}>
					<p className={styles.filmItem}>{item.Title}</p>
					<p className={styles.filmYear}>{item.Year}</p>
					<img className={styles.filmImg} alt={item.Title} src={item.Poster}/>
				</li>
			))}
		</div>
		</div>
	)
}

export default ListFilms