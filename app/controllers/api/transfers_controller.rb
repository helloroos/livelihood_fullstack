class Api::TransfersController < ApplicationController

    def create
        @transfer = Transfer.new(transfer_params)
        if @transfer.save
            render json: ["Transfer successful"], status: 200
        else
            render json: @transfer.errors.full_messages, status: 422
            # render json: ['ⓘ Unable to log in with provided credentials.'], status: 422
            # 422: not processable
        end
    end

    def index
        @transfers = Transfer.all
    end

    private

    def transfer_params
        params.require(:transfer).permit(:transfer_type, :amount, :user_id)
    end
end
