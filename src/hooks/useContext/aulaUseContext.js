import { Product } from './Product';
import { GlobalStorage } from './GlobalContext';

export function AulaUseContext() {
  // console.log(useContext);
  return (
    // É possível passar qualquer dado no useContext como outros hooks useState e etc
    <GlobalStorage>
      <Product />
    </GlobalStorage>
  );
}
