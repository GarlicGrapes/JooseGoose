class CreateIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :description
      t.string :link
      t.string :img_url

      t.timestamps
    end
  end
end
