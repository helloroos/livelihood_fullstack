# == Route Map
#
#               Prefix Verb   URI Pattern                     Controller#Action
#                 root GET    /                               static_pages#root
#          api_session DELETE /api/session(.:format)          api/sessions#destroy {:format=>:json}
#                      POST   /api/session(.:format)          api/sessions#create {:format=>:json}
#            api_users POST   /api/users(.:format)            api/users#create {:format=>:json}
#             api_user GET    /api/users/:id(.:format)        api/users#show {:format=>:json}
#        api_transfers GET    /api/transfers(.:format)        api/transfers#index {:format=>:json}
#                      POST   /api/transfers(.:format)        api/transfers#create {:format=>:json}
#           api_orders GET    /api/orders(.:format)           api/orders#index {:format=>:json}
#                      POST   /api/orders(.:format)           api/orders#create {:format=>:json}
# api_portfolio_values GET    /api/portfolio_values(.:format) api/portfolio_values#index {:format=>:json}
#                      POST   /api/portfolio_values(.:format) api/portfolio_values#create {:format=>:json}

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :transfers, only: [:create, :index]
    resources :orders, only: [:create, :index]
    resources :portfolio_values, only: [:create, :index]
  end

end
