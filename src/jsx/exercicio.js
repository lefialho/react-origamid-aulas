// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
import './style.css';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

export function ExercicioJSX() {
  const dados = mario;

  const total = dados.compras
    .map((compra) => +compra.preco.replace('R$ ', ''))
    .reduce((prev, act) => prev + act);

  return (
    <ul>
      <li>
        <b>Nome:</b> {dados.cliente}
      </li>
      <li>
        <b>Idade:</b> {dados.idade}
      </li>
      <li>
        <b>Situação: </b>
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </li>
      <li>
        <p>Total gasto: R$ {total}</p>
        {total > 8000 && <p>Seuu Gastadorrr de uma figaa!!</p>}
      </li>
    </ul>
  );
}
