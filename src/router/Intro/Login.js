import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate(); // Direciona o usuário para uma página específica

  function handleClick() {
    console.log('login');
    navigate('/sobre');
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </>
  );
}
