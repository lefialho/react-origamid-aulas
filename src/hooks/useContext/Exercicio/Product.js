import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

export function Product() {
  // const globalData = useContext(GlobalContext);
  const { data } = useContext(GlobalContext);
  // console.log(data);

  // if (data.data === null) return;
  if (data === null) return;

  return (
    <>
      <h2>Product: </h2>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.nome}</li>
        ))}
        {/* <li>{data.data[0].id}</li> */}
      </ul>
    </>
  );
}
