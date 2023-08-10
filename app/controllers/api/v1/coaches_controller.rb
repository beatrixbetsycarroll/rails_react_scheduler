class Api::V1::CoachesController < ApplicationController
  before_action :set_coach, only: %i[show destroy]

  def index
    coach = Coach.all.order(name: :asc)
    render json: coach
  end

  def create
    coach = Coach.create!(coach_params)
    if coach
      render json: coach
    else
      render json: coach.errors
    end
  end

  def show
    render json: @coach
  end

  def destroy
    @coach&.destroy
    render json: {message: 'Coach deleted!' }
  end

  private

  def coach_params
    params.permit(:name)
  end

  def set_coach
    @coach = Coach.find(params[:id])
  end
end
