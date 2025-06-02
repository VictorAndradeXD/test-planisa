module Api
  module V1
    class CovidBenchmarksController < ApplicationController
      before_action :set_covid_benchmark, only: [ :show, :update, :destroy ]

      # GET /api/v1/covid_benchmarks
      def index
        benchmarks = CovidBenchmark.all
        render json: benchmarks, include: :covid_results
      end

      # GET /api/v1/covid_benchmarks/:id
      def show
        render json: @covid_benchmark, include: :covid_results
      end

      # POST /api/v1/covid_benchmarks
      def create
        @covid_benchmark = CovidBenchmark.new(covid_benchmark_params)

        if @covid_benchmark.save
          fetch_and_save_results(@covid_benchmark)
          render json: @covid_benchmark, include: :covid_results, status: :created
        else
          render json: @covid_benchmark.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/covid_benchmarks/:id
      def update
        if @covid_benchmark.update(covid_benchmark_params)
          render json: @covid_benchmark
        else
          render json: @covid_benchmark.errors, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/covid_benchmarks/:id
      def destroy
        @covid_benchmark.destroy
        head :no_content
      end

      private

      def set_covid_benchmark
        @covid_benchmark = CovidBenchmark.find(params[:id])
      end

      def covid_benchmark_params
        params.require(:covid_benchmark).permit(:name, :country_a, :country_b, :start_date, :end_date)
      end

      def fetch_and_save_results(benchmark)
        (benchmark.start_date..benchmark.end_date).each do |date|
          [ benchmark.country_a, benchmark.country_b ].each do |country|
            data = fetch_data_from_api(country, date)

            next if data.nil? || data.empty?

            benchmark.covid_results.create!(
              country: country,
              confirmed: data["confirmed"] || 0,
              deaths: data["deaths"] || 0,
              date: date
            )
          end
        end
      end

      def fetch_data_from_api(country, date)
        require "net/http"
        require "uri"
        require "json"

        url = URI("https://api.api-ninjas.com/v1/covid19?country=#{country}&date=#{date}")

        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true

        request = Net::HTTP::Get.new(url)
        request["X-Api-Key"] = "RcT+mVSraCrh8ogmdMFF1A==pSvTACZObeMh7zz3"

        response = http.request(request)

        if response.code.to_i == 200
          parsed = JSON.parse(response.body)
          parsed.first
        else
          Rails.logger.error "Erro na API Ninjas: #{response.code} - #{response.body}"
          nil
        end
      rescue => e
        Rails.logger.error "Erro ao acessar API Ninjas: #{e.message}"
        nil
      end
    end
  end
end
