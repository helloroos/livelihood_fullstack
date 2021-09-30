class Api::TransfersController < ApplicationController

  def create
      @transfer = Transfer.new(transfer_params)
      if @transfer.save
          render :show
      else
          render json: @transfer.errors.full_messages, status: 422
      end
  end

  def index
      # @transfers = Transfer.where(user_id: 1)
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

  def transfer_params
      params.require(:transfer).permit(:transfer_type, :amount, :user_id)
  end
end
