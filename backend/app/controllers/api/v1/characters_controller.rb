class Api::V1::CharactersController < ApplicationController
    def index
        characters = Character.all
        render json: characters, only: [:id, :name, :role, :hp, :strength, :speed, :mind]
    end

    def show
        character = Character.find(params[:id])
        render json: character, only: [:name, :role, :hp, :strength, :speed, :mind]
    end
end