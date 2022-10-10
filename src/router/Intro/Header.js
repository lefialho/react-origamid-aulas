import { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Index.css';

export function Header() {
  const location = useLocation();

  useEffect(() => {
    console.log('mudou a rota');
  }, [location]);
  // Toda vez que o location for modificado faz algo, bom para google analytics,
  // e para para saber em qual página o usuário entrou

  return (
    <header
      style={{
        borderBottom: '1px solid #ccc',
        paddingBottom: '1rem',
        marginBottom: '1rem',
      }}
    >
      {/* Nav Link cria uma classe active no item selecionado */}
      {/* End evita o bug do elemento que está ativo, deixando apenas um ativado */}
      <NavLink to="/" end>
        Home
      </NavLink>{' '}
      | <NavLink to="/sobre">Sobre</NavLink> |{' '}
      <NavLink to="/login">Login</NavLink>
      {/* <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link> */}
    </header>
  );
}
