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
    <div className="p-4">
      <h2 className="text-2xl mb-4">Benchmarks Criados</h2>
      <ul className="space-y-2">
        {benchmarks.map(b => (
          <li key={b.id} className="p-4 border rounded shadow">
            <Link to={`/benchmark/${b.id}`} className="text-blue-600 font-bold">
              {b.name}
            </Link>
            <div>De {b.country_a} para {b.country_b}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
