import React, { useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { getSeriesFilms } from '../stores/actions'

const Input: React.FC = () => {
	const [Title, setText] = useState<string>('');
	const dispatch = useAppDispatch();
	
	const handleClick = () => {
		dispatch(getSeriesFilms(Title))
	}

	return (
		<div>
			<input value={Title} onChange={(e) => setText(e.target.value)} type="text" />
			<button onClick={handleClick}>Поиск</button>
		</div>
	)
}

export default Input;