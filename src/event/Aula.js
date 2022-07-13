export function AulaEvent() {
  function handleClick(e) {
    console.log(e.target);
  }

  function handleScroll(e) {
    console.log(e);
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <div style={{ height: '300vh' }}>
      <button
        onClick={(e) => alert(e.target.innerText + ' e compre')}
        onMouseMove={handleClick}
      >
        Click
      </button>
    </div>
  );
}
