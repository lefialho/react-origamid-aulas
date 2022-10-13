import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Head } from './Head';

export function Produto() {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  // const params = useParams();
  // console.log(params);

  useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError('Não encontrado ou possui algum erro');
      } finally {
        setLoading(false);
      }
      // console.log(response);
      // console.log(json);
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <p className="loading"></p>;
  if (error) return <p>{error}</p>;
  if (!produto) return;

  return (
    <>
      <Head
        title={`Ranek | ${produto.nome}`}
        description={`Ranek | Esse é o produto: ${produto.nome}`}
      />
      <section className="animeLeft">
        <ul className="lista" key={produto.id}>
          <li className={styles.produto}>
            <div>
              {produto.fotos.map((foto) => (
                <img key={foto.src} src={foto.src} alt={foto.titulo} />
              ))}
            </div>
            <div>
              <h1>{produto.nome}</h1>
              <span className={styles.preco}>R$ {produto.preco}</span>
              <p className={styles.descricao}>{produto.descricao}</p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
