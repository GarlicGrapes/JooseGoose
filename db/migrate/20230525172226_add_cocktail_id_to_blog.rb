class AddCocktailIdToBlog < ActiveRecord::Migration[7.0]
  def change
    add_column(:blogs, :cocktail_id, :integer)
  end
end
