// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import { useState } from 'react';
import { Produto } from './Produto';

export function ExercicioUseState() {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);

  async function handleClick(e) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
    // console.log(json);
    // console.log(e.target.innerText);
  }

  return (
    <section>
      <div style={{ display: 'flex', gap: '.5rem', margin: '2rem 0' }}>
        <button onClick={handleClick}>Tablet</button>
        <button onClick={handleClick}>Smartphone</button>
        <button onClick={handleClick}>Notebook</button>
      </div>
      {carregando && <div>Carregando...</div>}
      {!carregando && dados && <Produto dadosProduto={dados} />}
    </section>
  );
}
