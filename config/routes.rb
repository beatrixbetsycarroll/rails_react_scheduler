Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get 'slots/index'
      post 'slots/create'
      get 'slots/show/:id', to: 'slots#show'
      delete 'slots/destroy/:id', to: 'slots#destroy'

      get 'students/index'
      post 'students/create'
      get 'students/show/:id', to: 'students#show'
      delete 'students/destroy/:id', to: 'students#destroy'

      get 'coaches/index'
      post 'coaches/create'
      get 'coaches/show/:id', to: 'coaches#show'
      delete 'coaches/destroy/:id', to: 'coaches#destroy'

    end
  end

  root 'homepage#index'
  # NOTE: 
  # the above line used to be:   
  # get 'homepage/index'
  # this change instructs Rails to map 
  # requests to the root of the application to the index action of the Homepage controller, 
  # which in turn renders in the browser whatever is in the index.html.erb file located at 
  # app/views/homepage/index.html.erb

  get '/*path' => 'homepage#index'
  # NOTE: this adds a catch all route that directs any other request that doesnt match existing 
  # routes to the index action of the homepage controller

  # Defines the root path route ("/")
  # root "articles#index"
end
