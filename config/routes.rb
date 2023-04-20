Rails.application.routes.draw do

  resources :posts, only: [:index, :show]
  resources :users, only: [:create, :show]
  resources :sessions, only: [:create, :destroy]
end
