class CreateCovidResults < ActiveRecord::Migration[8.0]
  def change
    create_table :covid_results do |t|
      t.references :covid_benchmark, null: false, foreign_key: true
      t.string :country
      t.integer :confirmed
      t.integer :deaths
      t.date :date

      t.timestamps
    end
  end
end
