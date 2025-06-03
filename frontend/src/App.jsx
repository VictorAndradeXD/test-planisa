import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreateBenchmark from './pages/CreateBenchmark';
import Benchmark from './pages/Benchmark';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-blue-600 text-white flex justify-between">
        <h1 className="text-xl font-bold">Covid Benchmarks</h1>
        <div>
          <Link className="mr-4" to="/">Home</Link>
          <Link to="/create">Novo Benchmark</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBenchmark />} />
        <Route path="/benchmark/:id" element={<Benchmark />} />
      </Routes>
    </Router>
  );
}

export default App;
