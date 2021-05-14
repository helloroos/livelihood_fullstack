class Api::SessionsController < ApplicationController

#   before_action :ensure_logged_in, only: [:destroy]

  def create 
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      render "api/users/show"
    else
      # render json: @user.errors.full_messages, status: 422
      # 422: unprocessable
      # render json: ['Incorrect or incomplete credentials.'], status: 422
      render json: ['ⓘ Unable to log in with provided credentials.'], status: 422
      # 422: not processable

      # Add error "Please fill out this field."
      # 401: unauthorized
    end
  end

  def destroy 
    @user = current_user
    if @user
        log_out!
        render "api/users/show"
        # render {}
    else
        render json: ["No user is signed in"], status: 404
        # 404: not found
    end
  end
end