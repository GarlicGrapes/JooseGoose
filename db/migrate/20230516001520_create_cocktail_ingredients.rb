class CreateCocktailIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :cocktail_ingredients do |t|
      t.integer :cocktail_id
      t.integer :ingredient_id
      t.integer :quantity
      t.string :unit

      t.timestamps
    end
  end
end
