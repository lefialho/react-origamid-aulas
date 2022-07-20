import { useEffect } from 'react';
import { useState } from 'react';

export function ProdutoExercicio({ carregando, produto }) {
  const [dados, setDados] = useState(null);

  carregando(true);

  useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((data) => {
          setDados(data);
        });
    }
  }, [produto]); //Faz o fetch sempre que o produto modifica

  carregando(false);

  if (dados === null) return null;

  return (
    <>
      <h2>{dados.nome}</h2>
      <span>R$ {dados.preco}</span>
    </>
  );
}
