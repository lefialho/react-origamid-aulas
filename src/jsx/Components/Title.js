export function MyTitle({ style, titleText, children }) {
  return (
    <h1 style={style}>
      {titleText} {children}
    </h1>
  );
}
