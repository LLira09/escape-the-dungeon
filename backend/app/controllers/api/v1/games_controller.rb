class Api::V1::GamesController < ApplicationController

    def index
        games = Game.all
        render json: games
    end

    def create
        new_game = Game.create(user_id: params[:user_id], character_id: params[:character_id])
        render json: new_game
    end
    
end
