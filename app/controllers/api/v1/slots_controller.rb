class Api::V1::SlotsController < ApplicationController
  before_action :set_slot, only: %i[show destroy]

  def index
    slot = Slot.all.order(start_time: :asc)
    render json: slot, include: [:coach, :student]
  end

  def create
    slot = Slot.create!(slot_params)
    if slot
      render json: slot
    else
      render json: slot.errors
    end
  end

  def show
    # render json: @slot
    render json: @slot, include: [:coach, :student, :satisfaction, :notes]
  end

  def destroy
    @slot&.destroy
    render json: { message: 'Slot deleted!' }
  end

  private

  def slot_params
    params.permit(:coach_id, :start_time)
  end

  def set_slot
    @slot = Slot.find(params[:id])
  end
  
end