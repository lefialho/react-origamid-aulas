import { useState } from 'react';

export function Produto({ dadosProduto }) {
  return (
    <div>
      <h1>{dadosProduto.nome}</h1>
      <ul>
        <li>R$ {dadosProduto.preco}</li>
        <li>{dadosProduto.descricao}</li>
        <li>
          <img
            src={dadosProduto.fotos[0].src}
            alt={dadosProduto.fotos[0].titulo}
          />
        </li>
      </ul>
    </div>
  );
}
