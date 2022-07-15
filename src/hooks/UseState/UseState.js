import { useState } from 'react';

export function UseStateLesson() {
  const [ativo, setAtivo] = useState(false);
  const [dados, setDados] = useState({ nome: 'Lele', idade: '36' });
  const [contar, setContar] = useState(1);
  const [items, setItems] = useState(['Item 1']);

  function handleClick() {
    setContar(contar + 1);
    setItems([...items, `Item ${contar + 1}`]);
  }

  function handleClick2() {
    setAtivo(!ativo);
    setDados({
      ...dados,
      faculdade: 'Siimm tem facul',
    });
  }

  return (
    <div>
      <ul>
        <li>{dados.nome}</li>
        <li>{dados.idade}</li>
        <li>{dados.faculdade}</li>
      </ul>
      <ul style={{ listStyle: 'square', paddingLeft: '1.5rem' }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: '.5rem' }}>
        <button onClick={handleClick}>{contar}</button>
        <button onClick={handleClick2}>{ativo ? 'Ativo' : 'Inativo'}</button>
      </div>
    </div>
  );
}
