FactoryBot.define do
  factory :covid_result do
    covid_benchmark
    country { 'brazil' }
    confirmed { rand(1000..10000) }
    deaths { rand(10..1000) }
    date { '2024-01-01' }
  end
end
