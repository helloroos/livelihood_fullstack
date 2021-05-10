# == Route Map
#
#      Prefix Verb   URI Pattern              Controller#Action
#        root GET    /                        static_pages#root
#   api_users POST   /api/users(.:format)     api/users#create {:format=>:json}
# api_session DELETE /api/session(.:format)   api/sessions#destroy {:format=>:json}
#             POST   /api/session(.:format)   api/sessions#create {:format=>:json}

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

end
