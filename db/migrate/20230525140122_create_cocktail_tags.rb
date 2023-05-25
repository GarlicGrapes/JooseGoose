class CreateCocktailTags < ActiveRecord::Migration[7.0]
  def change
    create_table :cocktail_tags do |t|
      t.integer :cocktail_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
