class CreateCocktails < ActiveRecord::Migration[7.0]
  def change
    create_table :cocktails do |t|
      t.string :title
      t.string :type
      t.integer :user_id
      t.string :img_url

      t.timestamps
    end
  end
end
