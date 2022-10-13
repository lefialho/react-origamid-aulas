import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Contato } from './Components/Contato';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Produto } from './Components/Produto';
import { Produtos } from './Components/Produtos';

export function DesafioRouter() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Produtos />} end></Route>
            <Route path="produto/:id" element={<Produto />}></Route>
            <Route path="contato" element={<Contato />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
