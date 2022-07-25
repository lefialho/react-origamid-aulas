import { useEffect } from 'react';
import { useState } from 'react';

export function ProdutoExercicio({ produto }) {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    setCarregando(true);
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((data) => {
          setDados(data);
          setCarregando(false);
        });
    }
  }, [produto]); //Faz o fetch sempre que o produto modifica

  if (dados === null) return null;

  return (
    <>
      {carregando && <div>Carregando...</div>}
      {!carregando && produto && (
        <>
          <h2>{dados.nome}</h2>
          <span>R$ {dados.preco}</span>
        </>
      )}
    </>
  );
}
