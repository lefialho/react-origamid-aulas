import { UseLocalStorage } from './UseLocalStorage';

export function AulaCustomHook() {
  const [product, setProduct] = UseLocalStorage('product', ''); // Hook personalizado
  // String vazia não salva no localStorage inicialmente

  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  return (
    <div>
      <p>
        <b>Produto Preferido:</b> {product}
      </p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smarthphone</button>
    </div>
  );
}
