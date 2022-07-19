import { useEffect } from 'react';

export function ProdutoUseEffect() {
  useEffect(() => {
    // Com o use effect é possível fazer o scroll acontecer apenas uma vez na tela, que é o ideal
    function handleScroll(e) {
      console.log(e);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Só ocorre quando o elemento some da tela, deixando o código mais otimizado
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <p>My product</p>
    </div>
  );
}
