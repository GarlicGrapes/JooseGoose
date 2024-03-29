class CocktailsController < ApplicationController
  before_action :set_cocktail, only: %i[ show update destroy ]
  # skip_before_action :authorize, only: [:show, :index]

  # GET /cocktails
  def index
    @cocktails = Cocktail.all

    render json: @cocktails
  end

  # GET /cocktails/1
  def show
    render json: @cocktail
  end

  # POST /cocktails
  def create
    @cocktail = Cocktail.new(cocktail_params)

    if @cocktail.save
      render json: @cocktail, status: :created, location: @cocktail
    else
      render json: @cocktail.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cocktails/1
  def update
    if @cocktail.update(cocktail_params)
      render json: @cocktail
    else
      render json: @cocktail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cocktails/1
  def destroy
    @cocktail.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cocktail
      @cocktail = Cocktail.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cocktail_params
      params.require(:cocktail).permit(:title, :type, :user_id, :img_url)
    end
end
