class Api::V1::CharactersController < ApplicationController
    def index
        characters = Character.all
        render json: characters, only: [:name, :role, :hp, :strength, :speed, :mind]
    end
end