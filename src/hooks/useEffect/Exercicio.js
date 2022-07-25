// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import { useState, useEffect } from 'react';
import { ProdutoExercicio } from './ProdutoExercicio';

export function ExercicioUseEffect() {
  const [produto, setProduto] = useState(null);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
    // console.log(produtoLocal);
  }, []);

  useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  return (
    <section>
      <h1>Preferência: {produto}</h1>
      <div style={{ display: 'flex', gap: '.5rem', margin: '2rem 0' }}>
        <button onClick={handleClick}>Smartphone</button>
        <button onClick={handleClick}>Notebook</button>
      </div>
      <ProdutoExercicio produto={produto} />
    </section>
  );
}
