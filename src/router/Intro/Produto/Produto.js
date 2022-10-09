import {
  useParams,
  useLocation,
  NavLink,
  Outlet,
  Routes,
  Route,
} from 'react-router-dom';
import { ProdutoAvaliacao } from './ProdutoAvaliacao';
import { ProdutoCustomizado } from './ProdutoCustomizado';
import { ProdutoDescricao } from './ProdutoDescricao';

export function Produto() {
  const params = useParams(); // Bom para usar em fetch, passando o parâmetro no final da url
  const location = useLocation(); // Pega dados da navegação, para fazer buscas por ex.
  const search = new URLSearchParams(location.search);
  // http://localhost:3000/produto/smartphone?memoria=16&processador=corei3
  console.log(search.get('memoria'));
  // console.log(location);
  // console.log(params);

  return (
    <div>
      {/* <Outlet /> */}

      <h1>Produto</h1>
      <p>Produto: {params.id}</p>
      <nav style={{ margin: '1rem 0' }}>
        <NavLink to="">Descrição</NavLink> |{' '}
        <NavLink to="avaliacao">Avaliação</NavLink> |{' '}
        <NavLink to="customizado">Customização</NavLink>
      </nav>
      {/* Outlet mostra aonde a renderização dos filhos específica vai aparecer */}
      <Outlet />
      {/* <Routes>
        <Route path="" element={<ProdutoDescricao />}></Route>
        <Route path="avaliacao" element={<ProdutoAvaliacao />}></Route>
        <Route path="customizado" element={<ProdutoCustomizado />}></Route>
      </Routes> */}
    </div>
  );
}
