Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users
      get('/users/login/:username', to: 'users#show_alt')

      resources :characters
      get('/characters', to: 'characters#index')

      resources :games, only: [:index, :show, :create, :update]
    end
  end

end
