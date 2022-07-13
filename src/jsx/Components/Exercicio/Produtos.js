import { Header } from './Menu';
import { Produto } from './Produto';
import { Title } from './Title';

function ProdutoPropriedades({ propriedades }) {
  return (
    <>
      {propriedades.map((propriedade) => (
        <li key={propriedade}>{propriedade}</li>
      ))}
    </>
  );
}

export function Produtos({ produtosList }) {
  return (
    <>
      <Header />
      <main>
        <Title>Produtos</Title>
        {produtosList.map((produto) => (
          <Produto key={produto.nome} {...produto} />
        ))}
      </main>
    </>
  );
}
