class AddInstructionsToCocktail < ActiveRecord::Migration[7.0]
  def change
    add_column(:cocktails, :instructions, :text)
  end
end
