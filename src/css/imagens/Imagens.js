import img from './img/foto.jpg';
import svg from './img/dog.svg';
import './../imagens/Images.css';
import { ReactComponent as Dog } from './img/dog.svg';
import { DogSvg } from './DogSvg';
import { useState } from 'react';

export function Images() {
  const [eye, setEye] = useState(6);

  function handleClick() {
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        setEye(i);
      }, 30 * i);
    }
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <figure className="figure">
          <img src={svg} alt="Marca" />
          <p>Utilizado como tag img</p>
        </figure>
        <figure className="figure">
          <Dog />
          <p>Utilizado como componente do React</p>
        </figure>
        <figure className="figure" onClick={handleClick}>
          <DogSvg color="red" eye={eye} />
          <p>Utilizado como componente SVG</p>
        </figure>
      </div>
      <div className="bg"></div>
      <figure>
        <img src={img} alt="Dog" />
      </figure>
    </>
  );
}
