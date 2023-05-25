class BlogTagsController < ApplicationController
  before_action :set_blog_tag, only: %i[ show update destroy ]

  # GET /blog_tags
  def index
    @blog_tags = BlogTag.all

    render json: @blog_tags
  end

  # GET /blog_tags/1
  def show
    render json: @blog_tag
  end

  # POST /blog_tags
  def create
    @blog_tag = BlogTag.new(blog_tag_params)

    if @blog_tag.save
      render json: @blog_tag, status: :created, location: @blog_tag
    else
      render json: @blog_tag.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blog_tags/1
  def update
    if @blog_tag.update(blog_tag_params)
      render json: @blog_tag
    else
      render json: @blog_tag.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blog_tags/1
  def destroy
    @blog_tag.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog_tag
      @blog_tag = BlogTag.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blog_tag_params
      params.require(:blog_tag).permit(:blog_id, :tag_id)
    end
end
