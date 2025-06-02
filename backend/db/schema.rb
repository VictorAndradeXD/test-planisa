ActiveRecord::Schema[8.0].define(version: 2025_06_02_114121) do
  enable_extension "pg_catalog.plpgsql"

  create_table "covid_benchmarks", force: :cascade do |t|
    t.string "name"
    t.string "country_a"
    t.string "country_b"
    t.date "start_date"
    t.date "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_covid_benchmarks_on_name", unique: true
  end

  create_table "covid_results", force: :cascade do |t|
    t.bigint "covid_benchmark_id", null: false
    t.string "country"
    t.integer "confirmed"
    t.integer "deaths"
    t.date "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["covid_benchmark_id"], name: "index_covid_results_on_covid_benchmark_id"
  end

  add_foreign_key "covid_results", "covid_benchmarks"
end
