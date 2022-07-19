import { useEffect, useState } from 'react';
import { ProdutoUseEffect } from './Produto';

export function AulaUseEffect() {
  const [contar, setContar] = useState(0);
  const [dados, setDados] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log('exec');
  }, []); // useEffect renderiza apenas uma vez, bom para pegar dados do servidor

  useEffect(() => {
    document.title = 'Total' + contar;
  }, [contar]); // Muda o title sempre que o contar é atualizado, pois ele é uma dependência

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDados(data);
      });
  }, []);

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <ul>
            <li>{dados.descricao}</li>
            <li>R$ {dados.preco + contar}</li>
          </ul>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>

      <div style={{ marginTop: '1rem' }}>
        {modal && <ProdutoUseEffect />}
        <button onClick={() => setModal(!modal)}>Abrir Modal</button>
      </div>
    </div>
  );
}
