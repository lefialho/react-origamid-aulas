import '../../src/App.css';
import { useRef, useState } from 'react';
import { Header } from './Components/Header';
import { MyTitle } from './Components/Title';
import { Footer } from './Components/Footer';

export function AulaJSX() {
  const random = Math.random();
  const [active, setActive] = useState(false);
  const [text, setText] = useState(showName('Fialho'));
  const ref = useRef(null);
  const titleStyle = {
    color: 'purple',
    fontSize: '3rem',
  };
  const title = (
    <>
      <MyTitle
        titleText=" Estudos React"
        style={titleStyle}
        onClick={activated}
      />
    </>
  );

  function activated(e) {
    setActive(!active);
    setText(e.target.value);
    focus();
  }

  function showName(surname) {
    const name = 'Leandro';
    return `${name} ${surname}`;
  }

  function focus() {
    ref.current.focus();
  }

  return (
    <>
      <Header />
      <div>
        {new Date().getDay()}/{new Date().getMonth()}/{new Date().getFullYear()}
      </div>
      {title}
      <ul>
        {introTopics.map((topic) => (
          <li key={topic.id}>{topic.content}</li>
        ))}
      </ul>
      <label htmlFor="nome">Nome</label>
      <input
        ref={ref}
        type="text"
        className={active ? 'ativo' : 'inativo'}
        id="nome"
        defaultValue={text}
      />
      <div>{random * 10}</div>
      <Footer>
        <p>
          <b>This is footer</b>
        </p>
      </Footer>
    </>
  );
}

const introTopics = [
  { id: 1, content: 'state, ref' },
  { id: 2, content: 'functions and variables' },
  { id: 3, content: 'conditionals' },
];
