export function Input({ label, id, ...props }) {
  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props} />
    </div>
  );
}
