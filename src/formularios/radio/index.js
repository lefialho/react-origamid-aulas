import { useState } from "react"

export function Radio() {
	const [food, setFood] = useState('');
	const [drink, setDrink] = useState('');

	function handleChange({ target }) {
		setFood(target.value)
	}

	return (
		<>
			<form>
				<h2>Escolha a sua comida</h2>
				{food}
				<label>
					<input
						// name="food"
						checked={food === 'doces'}
						type="radio"
						value="doces"
						onChange={handleChange} /> Doces
				</label>
				<label>
					<input
						// name="food"
						checked={food === 'lanches'}
						type="radio"
						value="lanches"
						onChange={handleChange} /> Lanches
				</label>
				<label>
					<input
						// name="food"
						checked={food === 'salgados'}
						type="radio"
						value="salgados"
						onChange={handleChange} /> Salgados
				</label>

				<h2 style={{marginTop: '2rem'}}>Escolha a sua bebida</h2>
				{drink}
				<label>
					<input
						name="drink"
						type="radio"
						value="sucos"
						onChange={({target}) => setDrink(target.value)} /> Suco
				</label>
				<label>
					<input
						name="drink"
						type="radio"
						value="refrigerantes"
						onChange={({target}) => setDrink(target.value)} /> Refri
				</label>
			</form>
		</>
	)
}