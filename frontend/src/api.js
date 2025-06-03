  const API_BASE = "http://localhost:3000/api/v1";

export async function getCovidBenchmarks() {
  const res = await fetch(`${API_BASE}/covid_benchmarks`);
  return res.json();
}

export async function getCovidBenchmark(id) {
  const res = await fetch(`${API_BASE}/covid_benchmarks/${id}`);
  return res.json();
}

export async function createCovidBenchmark(data) {
  const res = await fetch(`${API_BASE}/covid_benchmarks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ covid_benchmark: data }),
  });
  return res.json();
}
