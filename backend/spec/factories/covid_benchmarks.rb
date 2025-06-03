FactoryBot.define do
  factory :covid_benchmark do
    name { Faker::Name.unique.name }
    country_a { "Brazil" }
    country_b { "Argentina" }
    start_date { Date.today - 30 }
    end_date { Date.today }
  end
end
