import { useEffect, useRef, useState } from 'react';
import styles from './Slide.module.css';

export function Slide({ slides }) {
  const [active, setActive] = useState(0);
  const [slidePosition, setSlidePosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    // setSlidePosition(slidePosition - width);
    // console.log(width);
    // console.log(-(width * active));
    const { width } = contentRef.current.getBoundingClientRect();
    setSlidePosition(-(width * active)); // Seta a posição do slide ativo no momento
  }, [active]); // Ocorre sempre o que o slide ativo for modificado

  function slidePrev() {
    active > 0 && setActive(active - 1);
  }

  function slideNext() {
    active < slides.length - 1 && setActive(active + 1);
    // console.log(contentRef.current);
    // console.log(contentRef.current.getBoundingClientRect());
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${slidePosition}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
}
