import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Head } from './Head';
import styles from './Produtos.module.css';

export function Produtos() {
  const [produtos, setProdutos] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  if (!produtos) return;

  return (
    <>
      <Head title="Ranek" description="Esses são os produtos da Ranek" />
      <section className="animeLeft">
        <ul className={`${styles.produtos} lista`}>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <Link to={`produto/${produto.id}`}>
                <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                <h1 className={styles.nome}>{produto.nome}</h1>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
