export function Button({ handleClick, children }) {
  return <button onClick={handleClick}>{children}</button>;
}