class Api::V1::GamesController < ApplicationController

    def index
        games = Game.all
        render json: games
    end

    def create
        new_user = User.create(username: params[:username], password: params[:password])
        render json: new_user, only: [:username, :password], include: {characters: { only: [:name, :role, :hp, :strength, :speed, :mind]}}
    end
    
end
