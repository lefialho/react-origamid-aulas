import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export function BootstrapDemo() {
  return (
    <>
      <div
        className="card bg-dark text-white m-5"
        style={{ maxWidth: '18rem' }}
      >
        <h5 className="card-header">Notebook</h5>
        <section className="card-body">
          <h3 className="card-title">R$ 2550</h3>
          <p className="card-text">Tooop d+ esse note tá!</p>
        </section>
      </div>

      <Card
        bg="light"
        text="dark"
        className="m-5"
        style={{ maxWidth: '18rem' }}
      >
        <Card.Header>Smartphone</Card.Header>
        <Card.Body>
          <Card.Title>R$ 1700</Card.Title>
          <Card.Text>Esse smarth é loucooo d++ meu!</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
