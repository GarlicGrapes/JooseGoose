class CreateBlogCocktails < ActiveRecord::Migration[7.0]
  def change
    create_table :blog_cocktails do |t|
      t.integer :blog_id
      t.integer :cocktail_id
      t.timestamps
    end
  end
end
