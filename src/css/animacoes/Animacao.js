import { useState } from 'react';
import { AnimacaoProduto } from './Produto';
import './../../css/App.css';

export function AnimacaoCss() {
  const [ativar, setAtivar] = useState(false);

  return (
    <>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <AnimacaoProduto />}
    </>
  );
}
