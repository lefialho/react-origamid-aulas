import { Link } from 'react-router-dom';
import { Head } from './Head';
import { Helmet } from 'react-helmet';

export function Home() {
  return (
    <div>
      <Helmet>
        <title>Router | Home</title>
        <meta name="description" content="Descrição da home" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
      </Helmet>
      {/* <Head title="Home" description="Descrição da home" /> */}
      <h1>Home</h1>
      <p>Página inicial</p>
      <Link to="produto/notebook">Notebook</Link> |{' '}
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
}
