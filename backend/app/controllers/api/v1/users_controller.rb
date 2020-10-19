class Api::V1::UsersController < ApplicationController

    def index
        users = User.all
        render json: users, only: [:username, :password], include: {characters: { only: [:name, :role, :hp, :strength, :speed, :mind]}}
    end

end
