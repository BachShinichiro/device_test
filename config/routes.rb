Rails.application.routes.draw do
  resources :feeds
  devise_for :users
  resources :blogs do
    resources :comments
  end
  root 'blogs#index'
  mount LetterOpenerWeb::Engine, at: "/letter_opener"
  
end
