import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'adicionar':
      return [...state, action.content];
    case 'remover':
      return state.filter((item) => item !== action.content);
    // retira os items que são iguais os do content ex: Banana === Banana
    default:
      throw new Error();
  }
}

const styles = {
  display: 'flex',
  gap: '.5rem',
  alignItems: 'center',
};

export function Exemplo() {
  const [state, dispatch] = useReducer(reducer, ['Banana', 'Morango']);

  return (
    <div style={styles}>
      <button onClick={() => dispatch({ type: 'adicionar', content: 'Limão' })}>
        Add Limão
      </button>
      <button onClick={() => dispatch({ type: 'remover', content: 'Banana' })}>
        Remover Banana
      </button>
      {state.join(' ')}
    </div>
  );
}
