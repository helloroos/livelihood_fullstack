class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            log_in!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
            # render json: ['ⓘ Unable to log in with provided credentials.'], status: 422
            # 422: not processable

            # Add error "Please fill out this field."
            
            # BULLET POINTED ERRORS
            # Please enter your first name.
            # Please enter your last name.
            # Please enter your email.
            # Your password must be at least 10 characters.
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
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end
