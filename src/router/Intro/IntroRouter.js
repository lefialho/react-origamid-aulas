import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { Home } from './Home';
import { Login } from './Login';
import { NaoEncontrada } from './NaoEncontrada';
import { Produto } from './Produto/Produto';
import { Sobre } from './Sobre';
import { ProdutoAvaliacao } from './Produto/ProdutoAvaliacao';
import { ProdutoCustomizado } from './Produto/ProdutoCustomizado';
import { ProdutoDescricao } from './Produto/ProdutoDescricao';

export function IntroRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        {/* O "*" Acessa qualquer pagina dentro de produto com rota dinâmica :id */}
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="" element={<ProdutoDescricao />}></Route>
          <Route path="avaliacao" element={<ProdutoAvaliacao />}></Route>
          <Route path="customizado" element={<ProdutoCustomizado />}></Route>
        </Route>
        {/* O "*" Seleciona tudo que for diferente das rotas acima*/}
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
