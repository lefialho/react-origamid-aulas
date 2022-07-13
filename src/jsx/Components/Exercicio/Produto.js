export function Produto({ nome, propriedades }) {
  return (
    <div className="list">
      <h2 style={{ fontSize: '1.5rem' }}>{nome}</h2>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
}
