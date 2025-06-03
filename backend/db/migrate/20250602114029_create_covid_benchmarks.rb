class CreateCovidBenchmarks < ActiveRecord::Migration[8.0]
  def change
    create_table :covid_benchmarks do |t|
      t.string :name
      t.string :country_a
      t.string :country_b
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
    add_index :covid_benchmarks, :name, unique: true
  end
end
