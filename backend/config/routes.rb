Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :covid_benchmarks
      resources :covid_results, only: [ :index, :show ]
    end
  end
end
