# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_06_02_114121) do
  # These are extensions that must be enabled in order to support this database
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
