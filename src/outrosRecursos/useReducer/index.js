import { useReducer, useState } from 'react';
import { Exemplo } from './Exemplo';

// No useReducer tem uma função que lida com todas as ações desejadas
// deixando toda lógica dentro de um único lugar ex: switch

function reducer(state, action) {
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'diminuir':
      return state - 1;
    default:
      throw new Error('Erro action não encontrada');
  }
  // if (action === 'aumentar') return state + 1;
  // if (action === 'diminuir') return state - 1;
  // return new Error('Erro action não encontrada');
  // console.log(state);
  // console.log(action);
}

export function AulaUseReducer() {
  // 0 = estado inicial, dispatch manda todas as ações pro reducer
  // a função de reducer só é ativada quando o dispatch é ativado
  const [state, dispatch] = useReducer(reducer, 0);
  // const [contar, setContar] = useState(0);

  // function aumentar() {
  //   setContar(contar + 1);
  // }

  // function diminuir() {
  //   setContar(contar - 1);
  // }
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '.5rem',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <button onClick={() => dispatch('aumentar')}>+</button>
        <button onClick={() => dispatch('diminuir')}>-</button>
        {/* <button onClick={aumentar}>+</button>
    <button onClick={diminuir}>-</button> */}
        <span>{state}</span>
      </div>
      <Exemplo />
    </>
  );
}
