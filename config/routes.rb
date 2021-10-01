# == Route Map
#
# Verb   URI Pattern              Controller#Action
# GET    /                        static_pages#root
# DELETE /api/session(.:format)   api/sessions#destroy {:format=>:json}
# POST   /api/session(.:format)   api/sessions#create {:format=>:json}
# POST   /api/users(.:format)     api/users#create {:format=>:json}
# GET    /api/users/:id(.:format) api/users#show {:format=>:json}
# GET    /api/transfers(.:format) api/transfers#index {:format=>:json}
# POST   /api/transfers(.:format) api/transfers#create {:format=>:json}
# GET    /api/orders(.:format)    api/orders#index {:format=>:json}
# POST   /api/orders(.:format)    api/orders#create {:format=>:json}

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :transfers, only: [:create, :index]
    resources :orders, only: [:create, :index]
  end

end
