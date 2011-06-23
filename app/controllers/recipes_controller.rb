class RecipesController < ApplicationController

  respond_to :json

  before_filter :strip_non_mass_assignment_vars

  def index
    @recipes = Recipe.all
    respond_with @recipes
  end

  def show
    @recipe = Recipe.find(params[:id])
    respond_with @recipe
  end

  def new
    @recipe = Recipe.new
    respond_with @recipe
  end

  def edit
    @recipe = Recipe.find(params[:id])
  end

  def create
    @recipe = Recipe.new(params)

    if @recipe.save
      render :json => @recipe.to_json(:only => [:created_at, :updated_at])
    else
      render :json => @recipe.errors.to_json, :status => :bad_request
    end
  end

  def update
    @recipe = Recipe.find(params[:id])

    if @recipe.update_attributes(params)
      render :json => @recipe.to_json(:only => [:created_at, :updated_at])
    else
      render :text => @recipe.errors, :status => :bad_request
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    respond_with @recipe
  end

  protected
  def strip_non_mass_assignment_vars
    params.delete(:action)
    params.delete(:authenticity_token)
    params.delete(:controller)
  end
end
