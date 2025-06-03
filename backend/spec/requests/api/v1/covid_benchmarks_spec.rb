# spec/requests/api/v1/covid_benchmarks_spec.rb
require 'rails_helper'

RSpec.describe "CovidBenchmarks API", type: :request do
  let!(:benchmark) { create(:covid_benchmark) }

  describe 'GET /api/v1/covid_benchmarks/:id' do
    it 'returns the benchmark' do
      get "/api/v1/covid_benchmarks/#{benchmark.id}"

      expect(response).to have_http_status(:ok)
      expect(response.parsed_body['name']).to eq(benchmark.name)
    end
  end

  describe 'PATCH /api/v1/covid_benchmarks/:id' do
    it 'updates the benchmark' do
      patch "/api/v1/covid_benchmarks/#{benchmark.id}", params: {
        covid_benchmark: { name: "New Name" }
      }

      expect(response).to have_http_status(:ok)
      expect(response.parsed_body['name']).to eq("New Name")
    end
  end
end
