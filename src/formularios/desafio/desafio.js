import { useState } from 'react';
import { Radio } from '../components/radio';
import { perguntas } from './perguntas';

export function DesafioFormularios() {
  const [option, setOption] = useState('');
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState([]);

  let hasNext = index < perguntas.length;
  let lista = perguntas[index];

  function handleNextClick() {
    hasNext && setIndex(index + 1);
    if (option === lista.resposta) setAnswer([...answer, 'correct']);
  }
  return (
    <>
      <h2 style={{ marginBottom: '.5rem' }}>Desafio</h2>
      {hasNext ? (
        <>
          <fieldset key={lista.pergunta}>
            <legend>{lista.pergunta}</legend>
            <Radio
              options={lista.options}
              value={option}
              setValue={setOption}
            />
          </fieldset>
          <button onClick={handleNextClick}>Próxima</button>
        </>
      ) : (
        <p>
          Você acertou: {answer.length} de {perguntas.length}
        </p>
      )}
    </>
  );
}
