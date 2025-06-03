import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

function EditBenchmark() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');

  useEffect(() => {
    api.get(`/covid_benchmarks/${id}`)
      .then(response => {
        setName(response.data.name);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`/covid_benchmarks/${id}`, { name })
      .then(() => navigate(`/benchmark/${id}`))
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h2>Editar Nome do Benchmark</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nome do Benchmark"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default EditBenchmark;
