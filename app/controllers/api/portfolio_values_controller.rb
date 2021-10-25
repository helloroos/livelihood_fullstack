class Api::PortfolioValuesController < ApplicationController

  def create
    @portfolio_value = PortfolioValue.new(portfolio_value_params)
    @user = current_user
    if @portfolio_value.save
        # render json: ["Order successful"], status: 200
        # render :show
        render "api/users/show"
    else
        render json: @portfolio_value.errors.full_messages, status: 422
    end
  end

  def index
    @portfolio_value = current_user.portfolio_values
    if @portfolio_value
        render :index
    else
        render json: ['User not found'], status: 404
    end
  end

  private

  def portfolio_value_params
    params.require(:portfolio_value).permit(:amount, :user_id)
  end

end
