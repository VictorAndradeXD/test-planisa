class UpdateCovidResultsStructure < ActiveRecord::Migration[8.0]
  def change
    remove_column :covid_results, :deaths, :integer
    add_column :covid_results, :new_cases, :integer, default: 0
  end
end
