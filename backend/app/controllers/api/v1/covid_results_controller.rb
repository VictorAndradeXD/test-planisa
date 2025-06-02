module Api
  module V1
    class CovidResultsController < ApplicationController
      def index
        results = CovidResult.all
        render json: results
      end

      def show
        result = CovidResult.find(params[:id])
        render json: result
      end
    end
  end
end
