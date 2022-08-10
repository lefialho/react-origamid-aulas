import { useEffect } from 'react';
import { UseFetch } from './UseFetch';
import { UseLocalStorage } from './UseLocalStorage';

export function AulaUseFetch() {
  const [product, setProduct] = UseLocalStorage('product', '');
  const { request, data, loading, error } = UseFetch();

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto',
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);
  // console.log(data);

  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  // Utilizando o custom use na frente da função, é possível criar hooks dentro dela
  function useAleatoryNumber() {
    useEffect(() => {
      console.log(Math.random());
    }, []);
  }
  useAleatoryNumber();

  // if (data === null) return;
  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <p>
          <b>Produto Preferido:</b> {product}
        </p>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smarthphone</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
}
