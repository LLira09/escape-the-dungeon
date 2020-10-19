class Api::V1::UsersController < ApplicationController

    def index
        users = User.all
        render json: users, only: [:username, :password], include: {characters: { only: [:name, :role, :hp, :strength, :speed, :mind]}}
    end

    def show
        user = User.find(params[:id])
        render json: user, only: [:username, :password], include: {characters: { only: [:name, :role, :hp, :strength, :speed, :mind]}}
    end

    def show_alt
        user = User.where({username: params[:username]})
        render json: user, only: [:username, :password], include: {characters: { only: [:name, :role, :hp, :strength, :speed, :mind]}}
    end

end
