import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function CreateBenchmark() {
  const [form, setForm] = useState({
    name: '',
    country_a: '',
    country_b: '',
    start_date: '',
    end_date: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/covid_benchmarks', form)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Criar Novo Benchmark</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="border p-2 w-full" name="name" placeholder="Nome" onChange={handleChange} required />
        <input className="border p-2 w-full" name="country_a" placeholder="País A" onChange={handleChange} required />
        <input className="border p-2 w-full" name="country_b" placeholder="País B" onChange={handleChange} required />
        <input className="border p-2 w-full" name="start_date" type="date" onChange={handleChange} required />
        <input className="border p-2 w-full" name="end_date" type="date" onChange={handleChange} required />
        <button className="bg-blue-600 text-white p-2 rounded">Criar</button>
      </form>
    </div>
  );
}

export default CreateBenchmark;
