class BlogCocktailsController < ApplicationController
  before_action :set_blog_cocktail, only: %i[ show update destroy ]

  # GET /blog_cocktails
  def index
    @blog_cocktails = BlogCocktail.all

    render json: @blog_cocktails
  end

  # GET /blog_cocktails/1
  def show
    render json: @blog_cocktail
  end

  # POST /blog_cocktails
  def create
    @blog_cocktail = BlogCocktail.new(blog_cocktail_params)

    if @blog_cocktail.save
      render json: @blog_cocktail, status: :created, location: @blog_cocktail
    else
      render json: @blog_cocktail.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blog_cocktails/1
  def update
    if @blog_cocktail.update(blog_cocktail_params)
      render json: @blog_cocktail
    else
      render json: @blog_cocktail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blog_cocktails/1
  def destroy
    @blog_cocktail.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog_cocktail
      @blog_cocktail = BlogCocktail.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blog_cocktail_params
      params.fetch(:blog_cocktail, {})
    end
end
