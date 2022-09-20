export function Input({
  id,
  label,
  onchange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onchange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
        // onChange={({ target }) => setValue(target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}

// export function Input({ id, label, onchange, ...props }) {
//   return (
//     <>
//       <label htmlFor={id}>{label}</label>
//       <input
//         id={id}
//         name={id}
//         onChange={onchange}
//         // onChange={({ target }) => setValue(target.value)}
//         {...props}
//       />
//     </>
//   );
// }
