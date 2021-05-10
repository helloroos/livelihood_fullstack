class Api::SessionsController < ApplicationController

  before_action :require_logged_in, only: [:destroy]

  def create 
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if user
      login(user)
      render json: 'api/user/show' # should this be users/?
    else
      render json: ['Incorrect or incomplete credentials.'], status: 401
    end
  end

  def destroy 
    if logged_in?
      logout
      render json: {}
    else
      render json: {}, status: 404
    end
  end
end