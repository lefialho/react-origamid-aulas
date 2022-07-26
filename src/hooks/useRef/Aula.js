import { useRef, useState } from 'react';

export function AulaUseRef() {
  // const video = useRef();
  // console.log(video.current);
  const [coments, setComents] = useState(['test', 'test2']);
  const [input, setInput] = useState('test');
  const [cart, setCart] = useState(0);
  const [notification, setNotification] = useState(null);
  const inputElement = useRef(); // Ideal para manipular o $dom diretamente
  const timeOutRef = useRef(); // Usado no setTimeOut para limpar um interavalo timeout anterior e add o próximo da forma correta

  function handleClick() {
    setComents([...coments, input]);
    setInput('');
    inputElement.current.focus(); // add foco no elemento todas vez que clica no enviar
  }

  function addItemOnCart() {
    setCart(cart + 1);
    setNotification('Item add ao carrinho');

    // console.log(timeOutRef.current);
    clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      setNotification(null);
      console.log('foi add no carrinho');
    }, 2000);
  }

  return (
    <div>
      <ul>
        {coments.map((coment, index) => (
          <li key={coment + index}>{coment}</li>
        ))}
      </ul>
      <br />
      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>

      <div style={{ marginTop: '1rem' }}>
        <p>{notification}</p>
        <button onClick={addItemOnCart}>Add Carrinho {cart}</button>
      </div>
    </div>
    // <div ref={video}>Teste</div>
  );
}
