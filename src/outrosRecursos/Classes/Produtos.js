import React from 'react';

class Produtos extends React.Component {
  constructor(props) {
    super(props); // super herda as propriedades criadas no componente superior
    this.teste = 'teste de classes'; // precisa do super para funcionar corretamente
    this.state = {
      contar: 0,
    };
    // bind criado para fazer a referência correta do this para o handleClick
    this.handleClick = this.handleClick.bind(this);
  }

  // Bom para fazer um fetch pq renderiza apenas uma vez
  componentDidMount() {
    console.log('Montou o componente');
  }

  // Funciona sempre que atualiza o componente
  componentDidUpdate() {
    document.title = `Contando: ${this.state.contar}`;
    console.log('Atualizou o componente');
  }

  // Funciona antes do componente sair da tela e perde o estado do componente
  componentWillUnmount() {
    console.log('Saiu da tela');
  }

  handleClick() {
    if (this.state.contar > 0)
      this.setState((state) => ({ contar: state.contar - 1 }));
  }

  render() {
    return (
      <div>
        <h1>
          {this.props.titulo}: {this.teste}
        </h1>
        <p>{this.state.contar}</p>
        <div style={{ display: 'flex', gap: '.5rem' }}>
          <button
            onClick={() =>
              this.setState((state) => ({ contar: state.contar + 1 }))
            }
          >
            +
          </button>
          <button onClick={this.handleClick}>-</button>
        </div>
      </div>
    );
  }
}

export default Produtos;
