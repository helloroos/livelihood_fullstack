class Api::CashController < ApplicationController

    def create
        @cash = Cash.new(cash_params)
        if @cash.save
            # render :show
            render json: ["Success"], status: 200
        else
            render json: ['Error'], status: 422
        end
    end

    # def show
    # end

    def update
    end

    private

    def cash_params
        params.require(:cash).permit(:transfer_type, :amount)
    end
end
