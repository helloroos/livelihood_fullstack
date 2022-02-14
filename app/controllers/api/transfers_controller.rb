class Api::TransfersController < ApplicationController

  def create
      @transfer = Transfer.new(transfer_params)
      @user = current_user # coming from app_controller
      if @transfer.save # engages model
        render "api/users/show"
      else
          render json: @transfer.errors.full_messages, status: 422
      end
  end

  def index
      @transfers = current_user.transfers
      if @transfers
          render :index
      else
          render json: ['User not found'], status: 404
      end
  end

  def show
      @transfer = Transfer.find_by(id: params[:id])
      if @transfer
          render :show
      else
          render json: ['Transfer not found'], status: 404
      end
  end

  private

  def transfer_params # from AJAX request
      params.require(:transfer).permit(:transfer_type, :amount, :user_id)
  end
end
