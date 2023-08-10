class Api::V1::StudentsController < ApplicationController
  before_action :set_student, only: %i[show destroy]

  def index
    student = Student.all.order(name: :asc)
    render json: student
  end

  def create
    student = Student.create!(student_params)
    if student
      render json: student
    else
      render json: student.errors
    end
  end

  def show
    render json: @student
  end

  def destroy
    @student&.destroy
    render json: {message: 'Student deleted!' }
  end

  private

  def student_params
    params.permit(:name)
  end

  def set_student
    @student = Student.find(params[:id])
  end
end
