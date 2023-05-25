class CocktailTagsController < ApplicationController
  before_action :set_cocktail_tag, only: %i[ show update destroy ]

  # GET /cocktail_tags
  def index
    @cocktail_tags = CocktailTag.all

    render json: @cocktail_tags
  end

  # GET /cocktail_tags/1
  def show
    render json: @cocktail_tag
  end

  # POST /cocktail_tags
  def create
    @cocktail_tag = CocktailTag.new(cocktail_tag_params)

    if @cocktail_tag.save
      render json: @cocktail_tag, status: :created, location: @cocktail_tag
    else
      render json: @cocktail_tag.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cocktail_tags/1
  def update
    if @cocktail_tag.update(cocktail_tag_params)
      render json: @cocktail_tag
    else
      render json: @cocktail_tag.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cocktail_tags/1
  def destroy
    @cocktail_tag.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cocktail_tag
      @cocktail_tag = CocktailTag.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cocktail_tag_params
      params.require(:cocktail_tag).permit(:cocktail_id, :tag_id)
    end
end
