class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            log_in!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
            # render json: ['Incomplete or incorrect information'], status: 422
            # 422: not processable
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
            render :show
        else
            render json: ['User not found'], status: 404
            # 404: not found
        end
    end

    # def update
    # end

    # def destroy
    # end

    private
    
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
