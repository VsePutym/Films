import React, { useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { getSeriesFilms } from '../stores/actions'
import styles from '../styles/styles.module.scss'

const Input: React.FC = () => {
	const [Title, setText] = useState<string>('');
	const dispatch = useAppDispatch();
	
	const handleClick = () => {
		dispatch(getSeriesFilms(Title))
	}

	return (
		<div>
			<input placeholder='Star Wars...' value={Title} onChange={(e) => setText(e.target.value)} type="text" />
			<button className={styles.buttonInput} onClick={handleClick}>Поиск</button>
		</div>
	)
}

export default Input;