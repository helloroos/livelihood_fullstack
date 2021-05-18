# class Api::TokensController < ApplicationController
#     def index
#         @tokens = Token.all
#         render "api/tokens/index"
#     end
    
#     def show
#         @token = Token.find_by(id: params[:id])
#         if @token
#             render "api/tokens/show"
#         else
#             render json: ["We were unable to find any results for your search."], status: 404
#         end
#     end
# end
