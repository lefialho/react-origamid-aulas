import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

export function Product() {
  const data = useContext(GlobalContext);
  // console.log(data);
  return (
    <div>
      <p>{data.name}</p>
      <div>
        <button onClick={() => data.setCount((count) => count + 1)}>Add</button>
        <span>{data.count}</span>
      </div>
      <div>
        <button onClick={() => data.sunByFour()}>Add</button>
        <span>{data.count}</span>
      </div>
      <div>
        <button onClick={() => data.multiplyByTwo()}>Multiply</button>
        <span>{data.count}</span>
      </div>
    </div>
  );
}
