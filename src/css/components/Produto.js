import styles from './Produto.module.css';
// console.log(styles); Css modules cria classes únicas para evitar conflitos

export function Produto() {
  return (
    <div className={styles['wrapper-produto']}>
      <h1 className={styles.titulo}>Note</h1>
      <p className={styles['preco-total']}>R$ 250 conto</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  );
}
