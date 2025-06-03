import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function CreateBenchmark() {
  const [form, setForm] = useState({
    name: '',
    country_a: 'Brazil',
    country_b: 'Canada',
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
    <div className="container">
      <h2>Criar Novo Benchmark</h2>
      <form onSubmit={handleSubmit}>
        <input 
          name="name" 
          placeholder="Nome do Benchmark" 
          value={form.name}
          onChange={handleChange} 
          required 
        />

        <label>País A:</label>
        <select 
          name="country_a" 
          value={form.country_a} 
          onChange={handleChange}
          required
        >
          <option value="brazil">Brazil</option>
          <option value="canada">Canada</option>
          <option value="argentina">Argentina</option>
        </select>

        <label>País B:</label>
        <select 
          name="country_b" 
          value={form.country_b} 
          onChange={handleChange}
          required
        >
          <option value="brazil">Brazil</option>
          <option value="canada">Canada</option>
          <option value="argentina">Argentina</option>
        </select>

        <label>Data Inicial:</label>
        <input 
          name="start_date" 
          type="date" 
          value={form.start_date} 
          onChange={handleChange} 
          required 
        />

        <label>Data Final:</label>
        <input 
          name="end_date" 
          type="date" 
          value={form.end_date} 
          onChange={handleChange} 
          required 
        />

        <button type="submit">Criar Benchmark</button>
      </form>
    </div>
  );
}

export default CreateBenchmark;
