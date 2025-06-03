import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function Benchmark() {
  const { id } = useParams();
  const [benchmark, setBenchmark] = useState(null);

  useEffect(() => {
    api.get(`/covid_benchmarks/${id}`)
      .then(response => setBenchmark(response.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!benchmark) return <div className="p-4">Carregando...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">{benchmark.name}</h2>
      <p><strong>Período:</strong> {benchmark.start_date} a {benchmark.end_date}</p>
      <p><strong>De:</strong> {benchmark.country_a} <strong>Para:</strong> {benchmark.country_b}</p>

      <h3 className="text-xl mt-6 mb-2">Resultados</h3>
      {benchmark.covid_results?.length > 0 ? (
        <ul className="space-y-2">
          {benchmark.covid_results.map(r => (
            <li key={r.id} className="p-3 border rounded">
              {r.country}: {r.cases} casos, {r.deaths} mortes
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
}

export default Benchmark;
