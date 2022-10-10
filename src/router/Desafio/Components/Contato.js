import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import { Head } from './Head';

export function Contato() {
  return (
    <>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <section className={`${styles.contato} animeLeft`}>
        <img src={foto} alt="Máquina de escrever" />
        <div>
          <h1>Entre em Contato</h1>
          <ul className={styles.dados}>
            <li>leandro@react.com</li>
            <li>(99)99999-9999</li>
            <li>Rua do 9999, bairro 999</li>
          </ul>
        </div>
      </section>
    </>
  );
}
