import React from 'react';
import Radio from './Form/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    respostaCorreta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    respostaCorreta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    respostaCorreta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    respostaCorreta: 'use',
    id: 'p4',
  },
];

const DesafioFormulariosOrigamid = () => {
  const [resposta, setResposta] = React.useState({
    p1: 'React.makeComponent()',
    p2: 'import Component from "./Component"',
    p3: 'useEffect()',
    p4: 'set',
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setResposta({ ...resposta, [target.id]: target.value });
    // console.log({ [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, respostaCorreta }) => resposta[id] === respostaCorreta,
    );
    setResultado(`${corretas.length} de ${perguntas.length}`);
  }

  function handlePrevClick() {
    if (slide > 0) {
      setSlide(slide - 1);
    }
    // console.log(slide);
  }

  function handleNextClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
    // console.log(slide);
  }

  return (
    <>
      <h2 style={{ margin: '3rem 0 1rem' }}>Desafio Origamid</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <Radio
            activeSlide={slide === index}
            key={pergunta.id}
            value={resposta[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
          />
        ))}
        {resultado ? (
          <p>
            <b>Você acertou:</b> {resultado}
          </p>
        ) : (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={handlePrevClick}>Anterior</button>
            <button onClick={handleNextClick}>Próxima</button>
          </div>
        )}
      </form>
    </>
  );
};

export default DesafioFormulariosOrigamid;
