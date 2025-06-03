import { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

function Home() {
  const [benchmarks, setBenchmarks] = useState([]);

  useEffect(() => {
    api.get('/covid_benchmarks')
      .then(response => setBenchmarks(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2>Benchmarks Criados</h2>
      {benchmarks.length === 0 && <p>Nenhum benchmark criado.</p>}
      {benchmarks.map(b => (
        <div key={b.id} className="card">
          <h3>
            <Link to={`/benchmark/${b.id}`}>
              {b.name}
            </Link>
          </h3>
          <p>{b.country_a} vs {b.country_b}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
