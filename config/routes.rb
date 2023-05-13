Rails.application.routes.draw do
  resources :blogs

  resources :posts, only: [:index, :show]
  resources :users, only: [:create, :show]
  resources :sessions, only: [:create, :destroy]

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  post '/signup', to: "users#create"
  get "/auth", to: "users#show"
  get '/me', to: "users#show"
  
end
