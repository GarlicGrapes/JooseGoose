class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity

    def index
        render json: Post.all
    end
    
    def show
        post = find_post
        render json: post, status: :ok
    end
    
    
    private

    def find_post
        Post.find_by(id: params[:id])
    end


    def render_uprocessable_entity(exception)
        render json: {error: exception.record.errors}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {error: "Card not found"}, status: :not_found
    end
    
end

