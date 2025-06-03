import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import api from '../services/api';

function Benchmark() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [benchmark, setBenchmark] = useState(null);

  useEffect(() => {
    api.get(`/covid_benchmarks/${id}`)
      .then(response => setBenchmark(response.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = () => {
    if (window.confirm('Deseja realmente excluir este benchmark?')) {
      api.delete(`/covid_benchmarks/${id}`)
        .then(() => navigate('/'))
        .catch(err => console.error(err));
    }
  };

  if (!benchmark) return <div className="container">Carregando...</div>;

  return (
    <div className="container">
      <h2>{benchmark.name}</h2>
      <p><strong>De:</strong> {benchmark.country_a} <strong>Para:</strong> {benchmark.country_b}</p>
      <p><strong>Período:</strong> {benchmark.start_date} até {benchmark.end_date}</p>

      <h3>Resultados</h3>
      {benchmark.covid_results?.length > 0 ? (
        benchmark.covid_results.map(result => (
          <div key={result.id} className="card">
            <p><strong>{result.country}</strong></p>
            <p>Casos: {result.cases}</p>
            <p>Mortes: {result.deaths}</p>
          </div>
        ))
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}

      <div style={{ marginTop: '20px' }}>
        <Link to={`/benchmark/${id}/edit`}>
          <button style={{ marginRight: '10px' }}>Editar</button>
        </Link>
        <button onClick={handleDelete} style={{ backgroundColor: 'red' }}>
          Deletar
        </button>
      </div>
    </div>
  );
}

export default Benchmark;
