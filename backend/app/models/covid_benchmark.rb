class CovidBenchmark < ApplicationRecord
  has_many :covid_results, dependent: :destroy

  validates :name, presence: true, uniqueness: true
  validates :country_a, :country_b, :start_date, :end_date, presence: true
end
