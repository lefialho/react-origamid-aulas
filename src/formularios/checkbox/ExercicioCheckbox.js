import { useState } from 'react';

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const colorsArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

export function ExercicioCheckbox() {
	const [colors, setColors] = useState(['azul', 'roxo']);

	function handleChangeColors({ target }) {
		if (target.checked) {
			setColors([...colors, target.value]);
		} else {
			setColors(colors.filter((color) => color !== target.value));
		}
	}

	function checkColor(color) {
		return colors.includes(color); // Inclues verifica se inclui a string passada, retornando true ou false
	}

	return (
		<div style={{ margin: '1rem 0' }}>
			<form>
				<h2>Escolha as cores</h2>
				{colorsArray.map((color, index) => (
					<label key={index} style={{textTransform: 'capitalize'}}>
						<input
							type="checkbox"
							value={color}
							checked={checkColor(color, index)}
							onChange={handleChangeColors}
						/> {' '} {color}
					</label>
				))}
			</form>
		</div>
	);
}
