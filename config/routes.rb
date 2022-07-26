Rails.application.routes.draw do
  get 'client', to: 'client#index'
  resources :articles
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'client#main'
  resources :client

  get '*path', to: 'articles#error', via: :all
end
