import { useState } from 'react';

export function Checkbox() {
  const [term, setTerm] = useState(false);
  const [colors, setColors] = useState(['azul', 'vermelho']);

  function handleChange({ target }) {
    setTerm(target.checked);
  }

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
        {term && <p>Aceitou os termos</p>}
        <label>
          <input
            type="checkbox"
            value="termos"
            checked={term}
            onChange={handleChange}
          />{' '}
          Aceito os termos
        </label>

        <h2>Escolha as cores</h2>
        <label>
          <input
            type="checkbox"
            value="azul"
            checked={checkColor('azul')}
            onChange={handleChangeColors}
          />{' '}
          Azul
        </label>
        <label>
          <input
            type="checkbox"
            value="vermelho"
            checked={checkColor('vermelho')}
            onChange={handleChangeColors}
          />{' '}
          vermelho
        </label>
      </form>
    </div>
  );
}
